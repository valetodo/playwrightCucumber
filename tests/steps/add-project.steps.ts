import {Given, Then, When} from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { addProjectPane } from "../../src/pages/components/add-project.page";
import {verticalMenu} from "../../src/pages/components/vertical-menu.page";
import {expect} from "chai";

Given('the user sets {string} as Project Name on the Add Project popup', async function (this: Context, projectName: string) {
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.setProjectName(projectName);
});

When('the user clicks the Add Button on the Add Project popup', async function () {
    await addProjectPane.clickAdd();
});
Given("the user clicks the color dropdown list and select {string} on the Add Project popup", async function (color) {
    await addProjectPane.setColorProject(color)
});
Given(/^The user add to favorites the new project on the Add Project popup$/, async function () {
    await addProjectPane.clickToFavorites();
});
Given("the user select type {string} project on the Add Project popup", async function (type) {
    await addProjectPane.setTypeProject(type);
});
Then("the user click the {string} button on the Add Project popup", async function (cancel) {
    await addProjectPane.clickRemove(cancel);
});
When(/^the user should not see the New Project on the Vertical Menu$/, async function () {
    const projectName = this.scenarioContext.PROJECTNAME as string;
    const isVisible: boolean = await verticalMenu.elementIsVisibleInPage(await verticalMenu.setProjectNameLocator(projectName));
    console.log(isVisible)
    expect(isVisible).false;
});