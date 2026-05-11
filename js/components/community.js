import communityPosts from "../data/communityPosts.js";



const community = () => {

  return `

    <section class="community-section">

      <div class="community-container">

        <div class="community-header">

          <div>

            <h2>
              Reader Community
            </h2>

            <p>
              Connect with passionate readers,
              share reviews, and discover emotional
              reading experiences together.
            </p>

          </div>



          <button class="primary-btn">

            Join Community

          </button>

        </div>





        <div class="community-grid">

          ${renderPosts()}

        </div>

      </div>

    </section>

  `;
};








const renderPosts = () => {

  return communityPosts.map(
    (post) => {

      return `

        <article class="community-card">

          <div class="community-user">

            <div class="community-avatar">

              <img
                src="${post.image}"
                alt="${post.name}"
                loading="lazy"
              />

            </div>





            <div class="community-user-info">

              <h3>

                ${post.name}

              </h3>



              <span>

                ${post.role}

              </span>

            </div>

          </div>





          <div class="community-content">

            <p>

              ${post.content}

            </p>

          </div>





          <div class="community-actions">

            <button
              class="community-action-btn like-btn"
              data-post-id="${post.id}"
            >

              ❤️ ${post.likes}

            </button>





            <button
              class="community-action-btn"
            >

              💬 ${post.comments}

            </button>

          </div>

        </article>

      `;
    }
  ).join("");

};








export const initCommunity = () => {

  const likeButtons =
    document.querySelectorAll(
      ".like-btn"
    );





  // =========================
  // LIKE BUTTONS
  // =========================

  likeButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          button.classList.toggle(
            "active"
          );

        }
      );

    }
  );

};





export default community;