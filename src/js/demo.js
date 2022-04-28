class Demo {
    start() {
        this.handleInterval = setInterval(() => {
            if (this.intervalLog) this.intervalLog(new Date().getTime());
        }, 1000);
    }
}

export default Demo;
