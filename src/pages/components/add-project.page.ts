import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private colorButton: string = '//label[@id="edit_project_modal_field_color_label"]/following-sibling::*'
    private selectNameColorButton = (color: string) => `//div[@class=' popper']//span[text()='${color}']`
    private addToFavoritesButton: string = '//label[text()="Add to favorites"]//div'
    private typeProjectButton = (type: string) => `//div[text()='${type}']//button`

    private cancelButton= (buttonName: string): string => `//span[text()="${buttonName}"]//parent::button`;

    // Extra Points add select the following behavior
    private colorDropdown: string = '';
    private favoritesToggle: string = '';
    private optionListView: string = '';
    private optionBoardView: string = '';

    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove(nameButton: string) {
        await ElementActions.click(this.cancelButton(nameButton));
    }

    async setColorProject(colorType: string) {
        await ElementActions.click(this.colorButton);
        await ElementActions.click(this.selectNameColorButton(colorType));
    }

    async clickToFavorites() {
        await ElementActions.click(this.addToFavoritesButton);
    }

    async setTypeProject(projectType: string) {
        await ElementActions.click(this.typeProjectButton(projectType));
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
        // Add Code
    }
}

export const addProjectPane = new AddProject();