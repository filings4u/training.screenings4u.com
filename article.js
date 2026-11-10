(() => {
  "use strict";
  // Local editorial content; replace this data source with the future CMS API.
  const articles = [{"slug":"dot-collector-qualification","cat":"DOT Training","title":"What DOT Specimen Collector Qualification Involves","excerpt":"Understand the difference between learning collection procedures and demonstrating proficiency for DOT urine specimen collection.","image":"dot-specimen-collector-course.png","minutes":"5 min read","body":[["h2","Training and proficiency are separate parts of qualification"],["p","DOT urine specimen collection is a regulated process under 49 CFR Part 40. Learning the procedures is important, but completing instruction alone does not establish initial qualification to perform DOT collections."],["p","Qualification involves appropriate instruction and an initial proficiency demonstration. Collectors also need to understand the collection process, the Federal Custody and Control Form, problem collections, and the responsibilities involved in protecting the integrity of a specimen."],["h2","Areas a collector should understand"],["ul",["Preparing the collection site and maintaining appropriate privacy and security.","Reviewing donor identification and explaining the collection process.","Using and completing the Federal Custody and Control Form correctly.","Following procedures for split specimens, specimen sealing, and shipment.","Responding to shy bladder situations, temperature out-of-range specimens, and other problem collections."]],["h2","Why mock collections matter"],["p","Initial qualification includes five consecutive error-free mock collections covering the required scenarios. These demonstrations are evaluated by a qualified monitor and are distinct from online learning modules."],["h2","Keep records and verify requirements"],["p","Collectors and their organizations should maintain the applicable documentation of training and proficiency. Before an individual performs collections, review current 49 CFR Part 40 requirements and any additional procedures that apply to the employer or program."],["h2","Explore training"],["p","Workforce Training provides information about DOT specimen collector training and practical collection resources. Review the course details to understand the learning format and any proficiency steps you must arrange."],["link","Explore DOT Specimen Collector Training","dot-specimen-collector-training.html"]]},{"slug":"reasonable-suspicion-supervisors","cat":"Supervisor Training","title":"Reasonable Suspicion Training: What Supervisors Need to Know","excerpt":"A practical overview of recognizing observable indicators, documenting facts, and following employer procedures.","image":"supervisor-training-course.png","minutes":"4 min read","body":[["h2","Observation comes before conclusions"],["p","Supervisors may be responsible for identifying signs that warrant a reasonable-suspicion determination under an applicable DOT program. Training should focus on specific, contemporaneous observations rather than assumptions or diagnoses."],["h2","The importance of factual documentation"],["p","Useful documentation describes what the supervisor directly observed, including appearance, behavior, speech, and body odors where relevant. It should distinguish observable facts from interpretations and follow the employer’s established procedures."],["ul",["Record the time and context of the observation.","Describe the behavior or physical indicators in plain, objective language.","Follow the organization’s escalation and referral procedures.","Maintain confidentiality and use only authorized reporting channels."]],["h2","Different agencies have different requirements"],["p","Training and testing procedures can vary across DOT agencies and regulated roles. Employers should verify the rules that apply to their specific operations and ensure supervisors know whom to contact for guidance."],["h2","Build consistency through training"],["p","Role-specific supervisor education helps teams respond more consistently, document concerns carefully, and understand their responsibilities without substituting for employer policies or required regulatory processes."],["link","Explore Supervisor Training","supervisor-training.html"]]},{"slug":"hazmat-employee-training-basics","cat":"HazMat Training","title":"HazMat Employee Training: Matching Coursework to Job Functions","excerpt":"Learn why general awareness, function-specific, safety, and security topics should reflect the work each hazmat employee performs.","image":"hazmat-training-course.png","minutes":"5 min read","body":[["h2","Start with the work an employee actually performs"],["p","HazMat training under the Hazardous Materials Regulations is tied to the functions employees perform. The duties of a person preparing shipping papers can differ substantially from those of a warehouse worker loading regulated packages or a driver transporting them."],["h2","Core training topics"],["ul",["General awareness and familiarization with the Hazardous Materials Regulations.","Function-specific instruction relevant to assigned work.","Safety training, including protective measures and emergency response information.","Security awareness and, when applicable, in-depth security training.","Additional modal or driver-related training where required."]],["h2","Recurrent training and records"],["p","The general HMR recurrent-training interval is at least once every three years. Employers remain responsible for verifying any other applicable requirements, ensuring training and testing cover assigned functions, and maintaining required training records."],["h2","Online courses are one part of an employer’s program"],["p","An online course can help present core knowledge, but an employer must still confirm that each employee receives all required function-specific instruction, testing, and any additional training applicable to the work."],["link","Explore HazMat Training","hazmat-training.html"]]}];
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || articles[0].slug;
  const article = articles.find(item => item.slug === slug);
  const setText = (selector, value) => {
    const target = document.querySelector(selector);
    if (target) target.textContent = value;
  };
  if (!article) {
    document.title = "Article Not Found | Workforce Training";
    setText("#article-title", "Article not found");
    setText("#article-excerpt", "This article is not available. Browse the blog to select a guide.");
    document.querySelector(".article-cover")?.remove();
    document.querySelector(".article-prose")?.replaceChildren();
    document.querySelector(".article-sidebar")?.remove();
    return;
  }
  document.title = article.title + " | Workforce Training Blog";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = article.excerpt;
  setText("#article-category", article.cat.toUpperCase());
  setText("#article-title", article.title);
  setText("#article-excerpt", article.excerpt);
  setText("#article-readtime", article.minutes);
  const image = document.querySelector("#article-image");
  if (image) {
    image.src = "/images/" + article.image;
    image.alt = article.title;
  }
  const prose = document.querySelector("#article-body");
  if (prose) {
    prose.replaceChildren();
    article.body.forEach(part => {
      if (part[0] === "link") {
        const a = document.createElement("a");
        a.className = "blog-primary";
        a.textContent = part[1] + " →";
        a.href = part[2];
        prose.appendChild(a);
      } else if (part[0] === "ul") {
        const ul = document.createElement("ul");
        part[1].forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });
        prose.appendChild(ul);
      } else {
        const el = document.createElement(part[0]);
        el.textContent = part[1];
        prose.appendChild(el);
      }
    });
  }
  const related = document.querySelector("#article-related");
  if (related) {
    articles.filter(item => item.slug !== article.slug).forEach(item => {
      const a = document.createElement("a");
      a.href = "article.html?slug=" + encodeURIComponent(item.slug);
      a.textContent = item.title + " →";
      related.appendChild(a);
    });
  }
})();