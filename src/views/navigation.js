import { html } from '../../node_modules/lit-html/lit-html.js';

const loggedUsers = html`
    <!-- Logged-in users -->
    <div class="user">
        <a href="/create">Add Your Car</a>
        <a href="/logout">Logout</a>
    </div>
`;

const guests = html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

const navigationTemplate = (user) => html`
<!-- Navigation -->
<a id="logo" href="/"><img id="logo-car" src="./images/car-logo.png" alt="img"/></a>
<nav>
  <div>
    <a href="/catalog">Our Cars</a>
    <a href="/search">Search</a>
  </div>
  ${user ? loggedUsers : guests}
  
</nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user)
}