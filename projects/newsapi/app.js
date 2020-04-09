function customHTTP() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "json";
        xhr.addEventListener("error", () => {
          cb(`Error status code: ${xhr.status}`, xhr);
        });
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error status code: ${xhr.status}`, xhr);
            return;
          }
          const response = xhr.response;
          cb(null, response);
        });
        xhr.send();
      } catch (error) {
        cb("you have given wrong params", error);
      }
    },
    post(url, headers, body = {}, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.responseType = "json";
        xhr.addEventListener("error", () => {
          cb("you have given wrong URL for http request", xhr);
        });
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb("you have given wrong URL for http request", xhr);
            return;
          }
          const response = xhr.response;
          cb(null, response);
        });

        if (headers) {
          Object.entries(headers).forEach(([header, value]) => {
            xhr.setRequestHeader(header, value);
          });
        }
        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb("you have given wrong params", error);
      }
    },
  };
}

// init http
const http = customHTTP();
const form = document.forms["news-contols"];
const countrySelect = form.elements["country"];
const categorySelct = form.elements["category"];
const searchInput = form.elements["search"];

// init load of page and materialize components
document.addEventListener("DOMContentLoaded", () => {
  M.AutoInit();
  loadNews();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadNews();
});

const newsService = (function () {
  const urlApi = "https://newsapi.org/v2";
  const apiKey = "c28898627d624dbf9464eb7e06ff50aa";
  return {
    topHeadlines(country = "ua", category = "technology", cb) {
      http.get(
        `${urlApi}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
        cb
      );
    },
    everything(query, cb) {
      http.get(`${urlApi}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

// load news
function loadNews() {
  showLoader();
  const country = countrySelect.value;
  const category = categorySelct.value;
  const search = searchInput.value;
  if (!search) {
    newsService.topHeadlines(country, category, onGetResponse);
  } else {
    newsService.everything(search, onGetResponse);
  }
}

// function on get response from the server
function onGetResponse(error, news) {
  removeLoader();
  if (error) {
    showAlert(error);
    return;
  }
  if (news.totalResults === 0) showAlert("nothing has been found");
  randerNews(news.articles);
}

function randerNews(articles) {
  const newsContainer = document.querySelector(".newsContainer .news-field");
  let fragment = "";
  clearContainer(newsContainer);
  articles.forEach((article) => {
    const el = newTamplate(article);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

function newTamplate({ urlToImage, url, description, title, source }) {
  if (!urlToImage.includes("http")) {
    const link = new URL(url);
    urlToImage = `${link.protocol}//${link.host}${urlToImage}`;
  }
  if (title.length > 30) title = title.slice(0, 30) + "...";
  return `
  <div class="col s12">
  <div class="card">
    <div class="card-image">
      <img src="${urlToImage || "2.jpg"}">
      <span class="card-title">${title || ""}</span>
    </div>
    <div class="card-content">
      <p>${description || ""}</p>
    </div>
    <div class="card-action">
      <a href="${url || "#"}" target="_blank">Read more</a>
    </div>
  </div>
</div>`;
}

function showAlert(msg) {
  M.toast({ html: msg });
}
function clearContainer(container) {
  let child = container.lastElementChild;
  while (child) {
    child.remove();
    child = container.lastElementChild;
  }
}

// loader functions
function showLoader() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="progress">
    <div class="indeterminate"></div>
  </div>`
  );
}
function removeLoader() {
  const loader = document.querySelector(".progress");
  loader.remove();
}
