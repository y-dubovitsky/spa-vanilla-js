export default class Footer {
  constructor() {
  }

  getTemplate() {
    return `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus quasi, rem doloremque neque voluptatem eos tenetur doloribus. Ut eligendi architecto sint, a veritatis molestiae perspiciatis dolor ratione quibusdam consequatur vel aperiam laboriosam, soluta dolore sit! Error saepe expedita recusandae ipsam animi accusamus quisquam sit. Ducimus aspernatur eveniet error tenetur architecto. At nostrum eius aliquam ab tempore explicabo fugit temporibus nobis dicta molestias, nemo, iste dolores esse voluptate a veniam vel amet quidem quos! Blanditiis assumenda commodi dolorum aliquam architecto corporis numquam sint saepe itaque minima suscipit pariatur ab sit consectetur autem exercitationem id nam officia facilis veniam, iste corrupti.
            `
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }
}