import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as catalogService from '../services/catalogService.js';

const detailsTemplate = (item, isOwner) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${item.price}</p>
                <p class="weight">Weight: ${item.weight} kg</p>
                <p class="top-speed">Top Speed: ${item.speed} kph</p>
                <p id="car-description">
                ${item.abaout}</p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner
        ? html`
                          <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="/delete/${item._id}" id="delete-btn">Delete</a>
              </div>
            `
        : nothing
    }

            </div>
          </div>
        </section>
`;

export const detailsView = (ctx) => {
    catalogService.getOne(ctx.params.itemId)
    .then(car => {
        let isOwner = car._ownerId == ctx.user?._id

        ctx.render(detailsTemplate(car, isOwner))
    })
}