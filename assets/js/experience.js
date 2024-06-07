AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Consultant Intern",
    cardImage: "assets/images/experience-page/saegus.webp",
    place: "Saegus, Paris/France",
    time: "(Feb, 2024 - present)",
    desp: "<ul><li>Designing a generative AI solution for a Text2Img translation task (adding a beard to human faces):" +
          "<ul><li>Conducted a literature review and studied different models to solve the task, including Pix2Pix, InstaGAN, LEDTIS.</li>" +
          "<li>Conducted a comparative study to select the best-performing solution.</li>" +
          "<li>Deployment of this model on a Vertex AI endpoint on GCP and deployment of the front-end application on Azure.</li></ul>",
  },
  {
    title: "Deep Learning Intern",
    cardImage: "assets/images/experience-page/ill.png",
    place: "LL - Institue Laue Langevin, Grenoble/France",
    time: "(Mai - Aug, 2023)",
    desp: "<ul><li>Utilized state-of-the-art Deep Learning methods, including Noise2Noise, Noise2Void, Noise2Self, and Noisier2Noise, for denoising 4D data.</li>"+
  "<li>Prepared and created training and testing data for denoising models.</li>"+
  "<li>Conduite de tests rigoureux et ajustement des hyperparamètres des réseaux pour optimiser les performances de ces modèles, et réalisation d’une analyse comparative approfondie afin d’identifier l’approche de débruitage la plus efficace.</li></ul>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


