export class WorkList {
  constructor() {}
  workList = [];

  addWork(work) {
    this.workList = [...this.workList, work];
    this.workList.forEach((work, index) => {
      // console.log(work, index);
      work.workId = index + 1;
    });
    console.log(this.workList);
  }

  removeWork(workId) {
    this.workList = this.workList.filter((work) => work.workId != workId);
    console.log(this.workList);
  }

  findWork(workId) {
    return this.workList.find((work) => work.workId == workId);
  }

  filterWork(status) {
    // console.log(status);
    return this.workList.filter((work) => work.status === status);
  }

  sortWork(val) {
    console.log(this.workList);
    return this.workList.sort((a, b) => {
      let value2 = a.workName.toLowerCase();
      let value1 = b.workName.toLowerCase();
      if (val == "up") {
        return value2 > value1 ? 1 : -1;
      } else if (val == "down") return value2 > value1 ? -1 : 1;
    });
  }
}
