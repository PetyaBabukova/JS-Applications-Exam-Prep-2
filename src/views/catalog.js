import { html } from '../../node_modules/lit-html/lit-html.js';
import * as catalogService from '../services/catalogService.js';
import { itemTemplate } from './templates/item.js'

const catalogTemplate = (items, user) => html`
    <!-- Dashboard page -->
    ${items.length > 0
        ? html`
    <h3 class="heading">Our Cars</h3>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
         ${items.map(item => itemTemplate(item, user))}
        </section>`
        : html`
        <h3 class="nothing">Nothing to see yet</h3>
        `}
`;

export const catalogView = (ctx) => {
    catalogService.getAll()
        .then(items => {
            ctx.render(catalogTemplate(items, ctx.user)) 
        })
}
