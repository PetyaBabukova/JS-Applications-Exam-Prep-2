import { html } from '../../../node_modules/lit-html/lit-html.js';

export const itemTemplate = (item)=> html`
          <div class="car">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="model">${item.model}</h3>
            <div class="specs">
              <p class="price">Price: €${item.price}</p>
              <p class="weight">Weight: ${item.weight} kg</p>
              <p class="top-speed">Top Speed: ${item.speed} kph</p>
            </div>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>
`;