import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-ods-meter accessibility', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-ods-meter');
  }

  it('should render the web component with the right role', async() => {
    await setup('<ods-ods-meter></ods-ods-meter>');

    expect(el.shadowRoot).not.toBeNull();
    expect(el.getAttribute('role')).toBe('article');
  });
});
