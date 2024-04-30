import React from 'react';
import './App.css'; // Make sure to import your CSS file

const Product = () => {
  return (
    <html lang="en">
      <head>
        <meta name='author' content='Roy Cuadra' />
        <meta name='description' content='Products' />
        <meta charSet="UTF-8" />
        <title>Product Details</title>
      </head>
      <body className="block-center-center">
        <section className="Product inline-center-center gap-4">
          <a href="#" className="Visual block-center-center">
            <picture>
              <source
                srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/product-details/images/img-1.avif"
                type="image/avif"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/product-details/images/img-1.webp"
                alt="cheetah hoodie"
              />
            </picture>
            <picture>
              <source
                srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/product-details/images/img-2.avif"
                type="image/avif"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/product-details/images/img-2.webp"
                alt="cheetah hoodie"
              />
            </picture>
          </a>
          <form action="" className="Form block-start-start gap-4">
            <h3>CHEETAH GLAM HOODIE</h3>
            <div className="Price">₱280.00</div>
            <fieldset className="TagList inline-wrap gap-2">
              <legend><b>Sizes</b>: (choose one)</legend>
              <div className="TagToggle block">
                <input
                  type="radio"
                  name="taglist-radio"
                  value="size-s"
                  id="taglist-radio-size-s"
                  required
                />
                <label htmlFor="taglist-radio-size-s">S</label>
              </div>
              <div className="TagToggle block">
                <input
                  type="radio"
                  name="taglist-radio"
                  value="size-m"
                  id="taglist-radio-size-m"
                  required
                />
                <label htmlFor="taglist-radio-size-m">M</label>
              </div>
              <div className="TagToggle block">
                <input
                  type="radio"
                  name="taglist-radio"
                  value="size-l"
                  id="taglist-radio-size-l"
                  required
                />
                <label htmlFor="taglist-radio-size-l">L</label>
              </div>
              <div className="TagToggle block">
                <input
                  type="radio"
                  name="taglist-radio"
                  value="size-xl"
                  id="taglist-radio-size-xl"
                  required
                />
                <label htmlFor="taglist-radio-size-xl">XL</label>
              </div>
              <div className="TagToggle block">
                <input
                  type="radio"
                  name="taglist-radio"
                  value="size-2xl"
                  id="taglist-radio-size-2xl"
                  required
                />
                <label htmlFor="taglist-radio-size-2xl">2XL</label>
              </div>
              <div className="TagToggle block">
                <input
                  type="radio"
                  name="taglist-radio"
                  value="size-3xl"
                  id="taglist-radio-size-3xl"
                  required
                />
                <label htmlFor="taglist-radio-size-3xl">3XL</label>
              </div>
            </fieldset>
            <fieldset id="quantity-list" className="QtField inline-center-center gap-2">
              <label htmlFor="quantitySelect">Quantity:</label>
              <select size="1" id="quantitySelect" name="amount_0_0">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </fieldset>
            <div className="block-start-start gap-2">
              <button className="Button Primary" type="submit">Pre-Order</button>
              <small>SHIPS ON MAY 5, 2024</small>
            </div>
            <p>JUMBO SCREENPRINTED GRAPHIC</p>
          </form>
        </section>
      </body>
    </html>
  );
}

export default Product;
