document.addEventListener('DOMContentLoaded', function() {
    // Переключение секций
    const navButtons = document.querySelectorAll('#navigation .max-btn');
    const sections = document.querySelectorAll('.max-object');

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === 'header' || section.id === 'navigation' || section.id === 'language') {
                section.style.display = 'block';
            } else {
                section.style.display = section.id === sectionId ? 'block' : 'none';
            }
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Переключение проектов
    const projectTabs = document.querySelectorAll('.project-tabs .max-btn');
    const projectPanes = document.querySelectorAll('.project-pane');

    function showProject(projectId) {
        projectTabs.forEach(tab => tab.classList.remove('active'));
        projectPanes.forEach(pane => pane.style.display = 'none');
        document.querySelector(`.project-tabs .max-btn[data-project="${projectId}"]`).classList.add('active');
        document.getElementById(projectId).style.display = 'block';
    }

    projectTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            showProject(projectId);
        });
    });

    // Переключение языков
    const langButtons = document.querySelectorAll('#language .max-btn');
    let currentLang = 'ru'; // Начальный язык

    function switchLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-ru][data-en][data-he]').forEach(elem => {
            elem.textContent = elem.getAttribute(`data-${lang}`);
        });
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(elem => {
            elem.placeholder = elem.getAttribute(`data-${lang}`);
        });
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchLanguage(this.getAttribute('data-lang'));
        });
    });

    // Инициализация
    switchLanguage(currentLang);
    showSection('home'); // Показываем домашнюю страницу при загрузке
    if (document.querySelector('.project-tabs .max-btn')) {
        showProject(document.querySelector('.project-tabs .max-btn').getAttribute('data-project'));
    }
});
