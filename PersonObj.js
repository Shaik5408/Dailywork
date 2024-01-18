var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function PersonAndWork(personAndWorker) {
    console.log("Name: ".concat(personAndWorker.name));
    console.log("Age: ".concat(personAndWorker.age));
    console.log("Job: ".concat(personAndWorker.job));
    console.log("Salary: ".concat(personAndWorker.salary));
}
var aslam = { name: "aslam", age: 30 };
var eng = { job: "Software Engineer", salary: 80000 };
PersonAndWork(__assign(__assign({}, aslam), eng));
