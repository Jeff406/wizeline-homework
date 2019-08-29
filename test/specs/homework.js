const assert = require('assert');

describe('[Form] Tell us about yourself', () => {
    
    it('submit the form successfully', () => {
        browser.url("/signup/personal");
        
        $('#firstName').setValue("Thai");
        $('#lastName').setValue("Le");
        $('#email').setValue("leqthai406@gmail.com");
        
        const month = $('[name="birthMonth"]');
        month.click();
        browser.pause(200);
        $('/*//span/div[text() = "October"]').click();

        const day = $('[name="birthDay"]');
        day.click();
        browser.pause(200);
        $('/*//span/div[text() = "10"]').click();

        const year = $('[name="birthYear"]');
        year.click();
        browser.pause(800);
        $('//*/span/div[text() = "1988"]').click();

        const gender = $('[name="genderCode"]');
        gender.click();
        browser.pause(200);
        $('//*/span/div[text() = "Male"]').click();

        const languages = $('[name="languages"]');
        languages.click();
        browser.pause(200);
        $('//*/span/div[text() = "Arabic"]').click();

        const nextButton = $('//*/span[text() = "Next: Location"]');
        nextButton.click();

        $("#city").setValue("ho chi minh");
        browser.pause(200)
        browser.keys(["Down arrow", "Enter"]);
        
        $('#zip').setValue('123');

        const country = $('[name="countryId"]');
        country.click();
        browser.pause(800);
        $('//*/span/div[text() = "Vietnam"]').click();


    });
    it('submit the form unsuccessfully by enter an invalid email', () => {
        browser.url("/signup/personal");
        
        $('#firstName').setValue("Thai");
        $('#lastName').setValue("Le");
        $('#email').setValue("leqthai406@gmail");
        
        const month = $('[name="birthMonth"]');
        month.click();
        browser.pause(200);
        $('/*//span/div[text() = "October"]').click();

        const day = $('[name="birthDay"]');
        day.click();
        browser.pause(200);
        $('/*//span/div[text() = "10"]').click();

        const year = $('[name="birthYear"]');
        year.click();
        browser.pause(800);
        $('//*/span/div[text() = "1988"]').click();

        const gender = $('[name="genderCode"]');
        gender.click();
        browser.pause(200);
        $('//*/span/div[text() = "Male"]').click();

        const languages = $('[name="languages"]');
        languages.click();
        browser.pause(200);
        $('//*/span/div[text() = "Arabic"]').click();

        const nextButton = $('//*/span[text() = "Next: Location"]');
        nextButton.click();

        $("#city").setValue("ho chi minh");
        browser.pause(200)
        browser.keys(["Down arrow", "Enter"]);
        
        $('#zip').setValue('123');

        const country = $('[name="countryId"]');
        country.click();
        browser.pause(800);
        $('//*/span/div[text() = "Vietnam"]').click();


    });
});