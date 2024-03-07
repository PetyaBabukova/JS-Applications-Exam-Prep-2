import { html } from '../../node_modules/lit-html/lit-html.js';
import * as catalogService from '../services/catalogService.js';

const editTemplate = (item, submitHandler) => html`
        <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input type="text" name="model" id="model" placeholder="Model" value=${item.model}/>
              <input
                type="text"
                name="imageUrl"
                value=${item.imageUrl}
                id="car-image"
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                value=${item.price}
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                value=${item.weight}
                id="weight"
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                value=${item.speed}
                id="speed"
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              >${item.about}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export const editView = (ctx) => {
    const id = ctx.params.itemId;

    const submitHandler = (e) => {
        e.preventDefault();

        let isValidData = true;
        const data = Object.fromEntries(new FormData(e.currentTarget));

        Object.entries(data).forEach(([key, value]) => {
            if (value == '') {
                isValidData = false;
            }
        })

        if (!isValidData) {
            alert('All fields are required');
            return;
        }


        catalogService.edit(id, data)
            .then(() => ctx.page.redirect(`/details/${id}`))
            .catch(err => alert(err))

    }

    catalogService.getOne(id)
        .then(item => {
            ctx.render(editTemplate(item, submitHandler))

        })
}