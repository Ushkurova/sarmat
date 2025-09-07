function tap(id,text){
    
    window.location.href='index.html';
    document.getElementById("on").classList?.remove("activ");
    document.getElementById("poc").classList?.remove("activ");
    document.getElementById("pook").classList?.remove("activ");

    document.getElementById(id).classList?.add("activ");
    document.getElementById("o").style.display="none";
    document.getElementById("po").style.display="none";
    document.getElementById("c").style.display="none";
    document.getElementById(text).style.display="block";
}
var currentPhoto = 1;


function ft(){
    setTimeout(ti, 2345);
}


function changeLanguage() {
    const lang = document.getElementById("language-dropdown").value;
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (translations[key]) {
                    el.innerHTML = translations[key];
                }
            });
        });
}

const languageNames = {
    full: {
      ru: "Русский",
      pl: "Polski",
      ua: "Українська",
      en: "English",
      de: "Deutsch"
    },
    short: {
      ru: "ru",
      pl: "pl",
      ua: "ua",
      en: "en",
      de: "de"
    }
  };

  function updateLanguageOptions() {
    const dropdown = document.getElementById("language-dropdown");
    const useShort = window.innerWidth <= 500;
    const names = useShort ? languageNames.short : languageNames.full;

    Array.from(dropdown.options).forEach(option => {
      option.text = names[option.value];
    });
    if (window.innerWidth<600)
      kt=0;
    else
      kt=1;
  }

  window.addEventListener("resize", updateLanguageOptions);
  window.addEventListener("DOMContentLoaded", updateLanguageOptions);
