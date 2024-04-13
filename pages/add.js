import BasePage from "./base.js";

export default class AddNotePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async insertTitle(title) {
    await this.click(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]"
    );

    await this.type(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]",
      title
    );
  }

  async insertContent(content) {
    await this.click(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]"
    );

    await this.type(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]",
      content
    );
  }

  async tapCreateButton() {
    await this.click('//android.widget.Button[@content-desc="Create"]');
  }

  async getMessage() {
    await this.find('//android.view.View[@content-desc="Create a Note"]');
  }
}
