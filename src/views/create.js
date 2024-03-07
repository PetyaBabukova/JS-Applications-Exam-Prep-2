import { html } from '../../node_modules/lit-html/lit-html.js';
import * as catalogService from '../services/catalogService.js';

const createTemplate = (SubmitHandler) => html`
<section id="create">
  <div class="form form-auto">
    <h2>Share Your Car</h2>
    <form @submit=${SubmitHandler} class="create-form">
      <input type="text" name="model" id="model" placeholder="Model"/>
      <input
        type="text"
        name="imageUrl"
        id="car-image"
        placeholder="Your Car Image URL"
      />
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
      />
      <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight in Kg"
      />
      <input
        type="text"
        name="speed"
        id="speed"
        placeholder="Top Speed in Kmh"
      />
      <textarea
        id="about"
        name="about"
        placeholder="More About The Car"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add</button>
    </form>
  </div>
</section>
`;

export const createView = (ctx) => {
    const SubmitHandler = (e) => {
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
            return
        }


        catalogService.create(data)
            .then(() => ctx.page.redirect('/catalog'))
            .catch(err => alert(err))

    }

    ctx.render(createTemplate(SubmitHandler))
}