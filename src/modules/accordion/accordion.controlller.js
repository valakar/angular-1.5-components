class AccordionController {
    constructor() {
        this.panels = [];
    }

    addPanel(panel) {
        this.panels.push(panel);
        if (this.panels.length > 0) {
            this.panels[0].turnOn();
        }
    }

    selectPanel(selectedPanel) {
        this.panels.forEach((panel, index) => {
            if (panel === selectedPanel) {
                this.panels[index].turnOn();
            } else {
                this.panels[index].turnOff();
            }
        });
    }
}

export default AccordionController;
