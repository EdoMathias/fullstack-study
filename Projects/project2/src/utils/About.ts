export function getAboutPage() {
  const pageMain = document.querySelector('#page-main');
  const aboutPageData = `
  <section class="inner cover d-flex justify-content-center align-items-center mt-5">
    <div class="card about-card-class">
        <div class="card-body">
            <h5 class="card-title">CRYPTODEX</h5>
            <h6 class="card-subtitle mb-2 text-muted">by Edo Mathias</h6>
            <p class="card-text">This is my first TypeScript project, the first of many.</p>
            <a href="https://github.com/EdoMathias" target="_blank" class="card-link">Github profile</a>
            <a href="https://github.com/EdoMathias/fullstack-study" target="_blank" class="card-link">Study repo</a>
        </div>
    </div>
</section>
`;
  if (pageMain) {
    pageMain.innerHTML = aboutPageData;
  }
}
