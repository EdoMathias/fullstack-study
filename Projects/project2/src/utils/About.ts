export function getAboutPage() {
  clearInterval((window as any).intervalId);

  const pageMainSection = document.querySelector('#page-contents-section');
  const aboutPageData = `
  <section class="inner cover d-flex justify-content-center align-items-center mt-5">
    <div class="card about-card-class">
        <div class="card-body">
            <h5 class="card-title">CRYPTODEX</h5>
            <h6 class="card-subtitle mb-2 text-muted">by Edo Mathias</h6>
            <img class="card-image" src="./images/98218412.jpeg">
            <hr />
            <p class="card-text">This is CRYPTODEX, your home for all things crypto. Here you can get accurate details of your favorite coins and even track some using our real-time charts.</p>
            <a href="https://github.com/EdoMathias" target="_blank" class="card-link">Github profile</a>
            <a href="https://github.com/EdoMathias/fullstack-study" target="_blank" class="card-link">Study repo</a>
        </div>
    </div>
</section>
`;
  if (pageMainSection) {
    pageMainSection.innerHTML = aboutPageData;
  }
}
