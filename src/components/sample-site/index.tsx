import { Component, Fragment, h } from '@stencil/core';
import { site } from "../../../example.com";


@Component({
  tag: 'sample-site',
  styleUrl: 'style.css',
  shadow: true,
})
export class SampleSite {
  render() {
    return (
      <Fragment>
        test
        <binotype-site site={site}></binotype-site>
      </Fragment>
    );
  }
}
