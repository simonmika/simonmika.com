import { newSpecPage } from '@stencil/core/testing'
import { SampleSite } from '.'

describe('example-site', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SampleSite],
      html: '<example-site></example-site>',
    });
    expect(root).toEqualHtml(`
      <example-site>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </example-site>
    `)
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SampleSite],
      html: `<example-site first="Stencil" middle="'Don't call me a framework'" last="JS"></example-site>`,
    })
    expect(root).toEqualHtml(`
      <example-site first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </example-site>
    `)
  })
})
