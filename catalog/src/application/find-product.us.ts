import { NotFoundException } from '@nestjs/common';

export class FindProduct {
  constructor() {}

  async exec() {
    // for (let i = 0; i < 10000; i++) {
    //   console.log(i);
    // }

    return new NotFoundException();
  }
}
