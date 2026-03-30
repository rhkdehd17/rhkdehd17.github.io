const portfolio = {
  brand: "kd",
  role: "FRONTEND DEVELOPER · GITHUB PAGES",
  title: "직접 만들고 꾸준히 개선하는 웹 개발자 포트폴리오",
  summary:
    "HTML, CSS, JavaScript 기반의 정적 웹사이트부터 GitHub Pages 배포, 자동화 워크플로까지 직접 구성하며 작업물을 빠르게 공개하는 데 익숙합니다.",
  focus: "Static Web · GitHub Pages · UI Implementation",
  about:
    "새로운 아이디어를 바로 웹으로 옮기고, 배포 가능한 결과물로 연결하는 과정을 좋아합니다. 개인 프로젝트를 통해 프론트엔드 구현, GitHub 기반 협업, 자동화 흐름을 꾸준히 실험하고 있습니다.",
  quote: {
    body: "\"작은 프로젝트라도 공개 가능한 상태로 완성하고, 다음 개선으로 자연스럽게 이어지게 만드는 흐름을 좋아합니다.\"",
    author: "kd",
  },
  heroStats: [
    { value: "3", label: "featured portfolio projects" },
    { value: "6", label: "public repositories on GitHub" },
    { value: "1", label: "automated GitHub Pages pipeline" },
    { value: "100%", label: "static deploy-ready stack" },
  ],
  strengths: [
    {
      title: "정적 웹 구현과 빠른 공개",
      copy:
        "작은 아이디어도 바로 페이지로 만들고, GitHub Pages까지 이어지는 배포 흐름으로 빠르게 결과물을 공개합니다.",
    },
    {
      title: "깔끔한 UI와 반응형 디테일",
      copy:
        "타이포그래피, 레이아웃, 반응형 간격처럼 완성도를 좌우하는 기본기를 탄탄하게 다지는 편입니다.",
    },
    {
      title: "반복 개선에 적합한 구조",
      copy:
        "데이터를 한곳에서 관리하는 방식으로 포트폴리오 내용을 계속 업데이트하기 쉽게 만들었습니다.",
    },
  ],
  projects: [
    {
      name: "Developer Portfolio Site",
      type: "Personal Website · GitHub Pages",
      summary:
        "현재 보고 있는 포트폴리오 사이트입니다. 정적 HTML, CSS, JavaScript로 구성하고 GitHub Actions를 통해 GitHub Pages에 자동 배포되도록 설계했습니다.",
      outcome: "로컬 미리보기, 저장소 업로드, Pages 자동 배포까지 한 번에 연결",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Actions"],
      links: [
        { label: "Live Site", href: "https://rhkdehd17.github.io/" },
        { label: "GitHub", href: "https://github.com/rhkdehd17/rhkdehd17.github.io" },
      ],
    },
    {
      name: "my-profile.site",
      type: "Responsive Web Portfolio · Frontend",
      summary:
        "HTML, CSS, JavaScript, TailwindCSS를 활용해 만든 개발자 웹 포트폴리오 프로젝트입니다. 반응형 레이아웃과 개인 브랜딩 페이지 구성이 핵심입니다.",
      outcome: "자기소개, 기술 스택, 프로젝트 소개를 담는 개인 웹 포트폴리오 구성",
      stack: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
      links: [
        { label: "GitHub", href: "https://github.com/rhkdehd17/my-profile.site" },
      ],
    },
    {
      name: "2_codex_github_profile_page_vibe",
      type: "One Page Portfolio · GitHub Pages",
      summary:
        "정적 HTML/CSS/JS 기반의 원페이지 포트폴리오 템플릿입니다. GitHub Pages 프로젝트 페이지에 바로 배포할 수 있도록 설계된 구조를 연습한 작업입니다.",
      outcome: "원페이지 구조와 GitHub Pages 배포 패턴을 정리한 포트폴리오 실습",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: [
        { label: "GitHub", href: "https://github.com/rhkdehd17/2_codex_github_profile_page_vibe" },
      ],
    },
  ],
  timeline: [
    {
      period: "2026",
      role: "Portfolio Builder",
      company: "GitHub Pages",
      description:
        "정적 사이트를 빠르게 만들고 공개할 수 있는 개인 포트폴리오 구조를 반복적으로 실험하고 있습니다.",
    },
    {
      period: "Recent",
      role: "Frontend Practice",
      company: "Personal Projects",
      description:
        "반응형 웹 UI, 포트폴리오 페이지 구성, GitHub 기반 배포 흐름을 중심으로 꾸준히 작업물을 쌓고 있습니다.",
    },
    {
      period: "Ongoing",
      role: "Workflow Explorer",
      company: "AI-assisted Development",
      description:
        "Codex와 같은 도구를 활용해 기획, 구현, 배포를 한 흐름으로 연결하는 작업 방식을 탐색하고 있습니다.",
    },
  ],
  stack: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "GitHub Actions",
    "GitHub Pages",
    "Responsive UI",
    "Static Site",
    "Vanilla JS",
    "CLI Workflow",
  ],
  contact: {
    title: "함께 만들고 싶은 제품이 있다면 이야기해 주세요.",
    copy: "메일이나 GitHub로 편하게 연락 주세요.",
    links: [
      { label: "Email", href: "mailto:rhkdehd17@gmail.com" },
      { label: "GitHub", href: "https://github.com/rhkdehd17" },
      { label: "Live Portfolio", href: "https://rhkdehd17.github.io/" },
    ],
  },
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
};

const setLinks = () => {
  const primary = document.getElementById("primary-link");
  const secondary = document.getElementById("secondary-link");

  if (primary) {
    primary.href = "#projects";
  }

  if (secondary) {
    secondary.href = portfolio.contact.links[0]?.href || "#contact";
  }
};

const renderHeroStats = () => {
  const container = document.getElementById("hero-stats");
  if (!container) {
    return;
  }

  container.innerHTML = portfolio.heroStats
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");
};

const renderSignalGrid = () => {
  const container = document.getElementById("signal-grid");
  if (!container) {
    return;
  }

  container.innerHTML = Array.from({ length: 8 }, (_, index) => {
    const heights = ["5rem", "7rem", "6rem", "8rem", "5.6rem", "7.6rem", "6.4rem", "8.4rem"];
    return `<div class="signal-bar" style="height:${heights[index]}"></div>`;
  }).join("");
};

const renderStrengths = () => {
  const container = document.getElementById("strength-grid");
  if (!container) {
    return;
  }

  container.innerHTML = portfolio.strengths
    .map(
      (item, index) => `
        <article class="strength-card reveal" style="transition-delay: ${index * 80}ms;">
          <span class="meta-line">0${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>
      `
    )
    .join("");
};

const renderProjects = () => {
  const container = document.getElementById("project-grid");
  if (!container) {
    return;
  }

  container.innerHTML = portfolio.projects
    .map(
      (project, index) => `
        <article class="project-card reveal" style="transition-delay: ${index * 100}ms;">
          <div>
            <span class="meta-line">${project.type}</span>
            <h3>${project.name}</h3>
          </div>
          <p class="project-copy">${project.summary}</p>
          <p class="project-copy"><strong>Outcome</strong> ${project.outcome}</p>
          <div class="project-tags">
            ${project.stack.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
          <div class="project-links">
            ${project.links
              .map(
                (link) =>
                  `<a href="${link.href}" ${
                    link.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""
                  }>${link.label}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
};

const renderTimeline = () => {
  const container = document.getElementById("timeline");
  if (!container) {
    return;
  }

  container.innerHTML = portfolio.timeline
    .map(
      (item, index) => `
        <article class="timeline-item reveal" style="transition-delay: ${index * 100}ms;">
          <div class="timeline-dot" aria-hidden="true"></div>
          <div>
            <span class="timeline-period">${item.period}</span>
            <h3>${item.role} · ${item.company}</h3>
            <p class="timeline-copy">${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const renderStack = () => {
  const container = document.getElementById("tag-cloud");
  if (!container) {
    return;
  }

  container.innerHTML = portfolio.stack
    .map((item) => `<span class="tech-tag">${item}</span>`)
    .join("");
};

const renderContact = () => {
  const container = document.getElementById("contact-links");
  if (!container) {
    return;
  }

  container.innerHTML = portfolio.contact.links
    .map((link) => {
      const isExternal = link.href.startsWith("http");
      return `
        <a href="${link.href}" ${isExternal ? 'target="_blank" rel="noreferrer"' : ""}>
          <span>${link.label}</span>
        </a>
      `;
    })
    .join("");
};

const revealOnScroll = () => {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  items.forEach((item) => observer.observe(item));
};

const boot = () => {
  setText("brand-name", portfolio.brand);
  setText("hero-eyebrow", portfolio.role);
  setText("hero-title", portfolio.title);
  setText("hero-summary", portfolio.summary);
  setText("focus-label", portfolio.focus);
  setText("about-body", portfolio.about);
  setText("quote-body", portfolio.quote.body);
  setText("quote-author", `- ${portfolio.quote.author}`);
  setText("contact-title", portfolio.contact.title);
  setText("contact-copy", portfolio.contact.copy);
  setText("footer-copy", `© ${new Date().getFullYear()} ${portfolio.brand}. Built for GitHub Pages.`);
  renderHeroStats();
  renderSignalGrid();
  renderStrengths();
  renderProjects();
  renderTimeline();
  renderStack();
  renderContact();
  setLinks();
  revealOnScroll();
};

boot();
