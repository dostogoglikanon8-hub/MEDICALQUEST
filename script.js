const startButton = document.getElementById("startButton");
const mainMenu = document.querySelector(".main-menu");

startButton.addEventListener("click", showTopics);
function showMainMenu() {
    const mainMenu = document.querySelector(".main-menu");
    const gameContent = document.getElementById("game-content");

    mainMenu.style.display = "block";
    gameContent.innerHTML = "";
    gameContent.style.display = "none";
}
function showTopics() {
    mainMenu.innerHTML = `
        <h2>CHOOSE YOUR TOPIC</h2>

        <div class="topic-buttons">

            <button class="topic-button pharmacy" onclick="showPharmacy()">
                💊
                <span>AT THE PHARMACY</span>
            </button>

            <button class="topic-button lifestyle" onclick="showLifestyle()">
                🥗
                <span>HEALTHY LIFESTYLE</span>
            </button>

        </div>

        <button class="back-button" onclick="location.reload()">
            ← BACK
        </button>
    `;
}


function showPharmacy() {

    mainMenu.innerHTML = `
        <h2>💊 AT THE PHARMACY</h2>

        <div class="section-buttons">

            <button class="section-button" onclick="showPharmaceuticalForms()">
                💊
                <span>PHARMACEUTICAL FORMS</span>
            </button>

            <button class="section-button" onclick="showPackaging()">
                📦
                <span>PACKAGING & LABELLING</span>
            </button>

            <button class="section-button" onclick="showPrescriptions()">
                📋
                <span>PRESCRIPTIONS</span>
            </button>

           <button class="section-button" onclick="showStorageOfMedicines()">
    🧊
    <span>STORAGE OF MEDICINES</span>
</button>

            <button class="section-button challenge" onclick="showPharmacyChallenge()">
    🧠
    <span>PHARMACY CHALLENGE</span>
</button>

        </div>

        <button class="back-button" onclick="showTopics()">
            ← BACK TO TOPICS
        </button>
    `;
}


function showPackaging() {

    mainMenu.innerHTML = `
        <h2>📦 PACKAGING & LABELLING</h2>

        <p class="section-intro">
            Pharmaceutical packaging protects medicines and helps
            patients identify and use them safely.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">📦</div>

            <h3>PRIMARY PACKAGING</h3>

            <p>
                Primary packaging is the material that comes into
                direct contact with the medicine. It protects the
                product from damage and contamination.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> blister packs,
                bottles, tubes and ampoules.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">📦</div>

            <h3>SECONDARY PACKAGING</h3>

            <p>
                Secondary packaging is the outer packaging that
                protects the primary package and provides additional
                information about the medicine.
            </p>

            <div class="example">
                💡 <strong>Example:</strong> a cardboard box
                containing a blister pack.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🏷️</div>

            <h3>LABELLING</h3>

            <p>
                The label provides important information about
                the medicine and its safe use.
            </p>

            <div class="example">
                💡 <strong>Important information:</strong>
                medicine name, active ingredient, strength,
                expiry date and storage conditions.
            </div>

        </div>

        <button class="back-button" onclick="showPharmacy()">
            ← BACK TO PHARMACY
        </button>
    `;
}
function showPackaging() {
    mainMenu.innerHTML = `
        <div class="lesson-page">

            <button class="back-btn" onclick="showPharmacy()">
                ← BACK
            </button>
            <h1>📦 PACKAGING & LABELLING</h1>

            <p class="lesson-intro">
                Learn how medicines are packaged and what important
                information can be found on their packaging.
            </p>

            <div class="menu-grid">

                <button class="menu-card" onclick="showPrimaryPackaging()">
                    <div class="menu-icon">📦</div>
                    <h2>PRIMARY PACKAGING</h2>
                    <p>
                        Packaging that comes into direct contact
                        with the medicine.
                    </p>
                </button>

                <button class="menu-card" onclick="showSecondaryPackaging()">
                    <div class="menu-icon">📦</div>
                    <h2>SECONDARY PACKAGING</h2>
                    <p>
                        Outer packaging that protects the primary
                        package.
                    </p>
                </button>

                <button class="menu-card" onclick="showLabelling()">
                    <div class="menu-icon">🏷️</div>
                    <h2>LABELLING</h2>
                    <p>
                        Important information written on medicine
                        packaging.
                    </p>
                </button>

            </div>

        </div>
    `;
}
function showPrimaryPackaging() {
    mainMenu.innerHTML = `
        <div class="lesson-page">

            <button class="back-btn" onclick="showPackaging()">
                ← BACK
            </button>

            <h1>📦 PRIMARY PACKAGING</h1>

            <p class="lesson-intro">
                Primary packaging is the material that comes
                into direct contact with the medicine.
            </p>

            <div class="lesson-card">
                <h2>What is primary packaging?</h2>

                <p>
                    Primary packaging protects the medicine
                    and keeps it safe until it is used.
                </p>

                <p><strong>Examples:</strong></p>

                <ul>
                    <li>Blister packs</li>
                    <li>Bottles</li>
                    <li>Vials</li>
                    <li>Ampoules</li>
                    <li>Tubes</li>
                </ul>
            </div>

            <div class="lesson-card">
                <h2>💊 Common examples</h2>

                <div class="example-item">
                    <strong>Blister pack</strong>
                    <p>
                        A package commonly used for tablets
                        and capsules.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Bottle</strong>
                    <p>
                        A container commonly used for liquids,
                        tablets and capsules.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Vial</strong>
                    <p>
                        A small container usually used for
                        injections or other medicines.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Ampoule</strong>
                    <p>
                        A small sealed container containing
                        a single dose of medicine.
                    </p>
                </div>
            </div>

            <div class="lesson-card important">
                <h2>⚠️ Remember</h2>

                <p>
                    <strong>
                        Primary packaging = directly touches
                        the medicine.
                    </strong>
                </p>
            </div>
<div class="lesson-card medicine-example">

                <h2>🔎 Real-life example</h2>

                <p>
                    Let's look at the primary packaging of
                    <strong>Paracetamol 500 mg</strong>.
                </p>

                <div class="blister-wrapper">

                    <div class="blister-pack">

                        <div class="blister-title">
                            PARACETAMOL
                        </div>

                        <div class="blister-strength">
                            500 mg
                        </div>

                        <div class="blister-form">
                            TABLETS
                        </div>

                        <div class="blister-pills">
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                        </div>

                    </div>

                </div>

                <div class="example-explanation">

                    <h3>💡 Why is this primary packaging?</h3>

                    <p>
                        This is a <strong>blister pack</strong>.
                        The tablets are placed directly inside it,
                        so the blister is in direct contact with the medicine.
                    </p>

                    <div class="definition-box">
                        <strong>PRIMARY PACKAGING</strong>
                        <span>
                            Packaging that directly comes into contact
                            with the medicine.
                        </span>
                    </div>

                </div>

            </div>
        </div>
    `;
}


function showSecondaryPackaging() {
    mainMenu.innerHTML = `
        <div class="lesson-page">

            <button class="back-btn" onclick="showPackaging()">
                ← BACK
            </button>

            <h1>📦 SECONDARY PACKAGING</h1>

            <p class="lesson-intro">
                Secondary packaging is the outer packaging
                that protects the primary package.
            </p>

            <div class="lesson-card">
                <h2>What is secondary packaging?</h2>

                <p>
                    Secondary packaging usually does not come
                    into direct contact with the medicine.
                </p>

                <p><strong>Examples:</strong></p>

                <ul>
                    <li>Cardboard boxes</li>
                    <li>Outer cartons</li>
                    <li>Protective containers</li>
                </ul>
            </div>

            <div class="lesson-card">
                <h2>💊 What can you find on it?</h2>

                <div class="example-item">
                    <strong>Medicine name</strong>
                    <p>
                        The name of the medicine or its
                        active ingredient.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Strength</strong>
                    <p>
                        The amount of active ingredient,
                        for example 500 mg.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Dosage form</strong>
                    <p>
                        For example: tablets, capsules,
                        cream or syrup.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Quantity</strong>
                    <p>
                        The number of tablets or capsules,
                        or the volume of liquid.
                    </p>
                </div>
            </div>

            <div class="lesson-card important">
                <h2>⚠️ Remember</h2>

                <p>
                    <strong>
                        Secondary packaging = protects the
                        primary package and contains important
                        information.
                    </strong>
                </p>
            </div>
<div class="lesson-card medicine-example">

                <h2>🔎 Real-life example</h2>

                <p>
                    Now let's look at the <strong>secondary packaging</strong>
                    of the same medicine.
                </p>

                <div class="box-wrapper">

                    <div class="medicine-box">

                        <div class="box-top">
                            PARACETAMOL
                        </div>

                        <div class="box-main">
                            <div class="box-strength">
                                500 mg
                            </div>

                            <div class="box-form">
                                TABLETS
                            </div>

                            <div class="box-quantity">
                                20 tablets
                            </div>
                        </div>

                        <div class="box-bottom">
                            FOR ORAL USE
                        </div>

                    </div>

                </div>

                <div class="example-explanation">

                    <h3>💡 Why is this secondary packaging?</h3>

                    <p>
                        This cardboard box does not normally touch
                        the tablets directly. It protects the primary
                        packaging and provides important information
                        about the medicine.
                    </p>

                    <div class="definition-box">
                        <strong>SECONDARY PACKAGING</strong>
                        <span>
                            Outer packaging that protects the primary
                            packaging and contains important information.
                        </span>
                    </div>

                </div>

            </div>
        </div>
    `;
}


function showLabelling() {
    mainMenu.innerHTML = `
        <div class="lesson-page">

            <button class="back-btn" onclick="showPharmacy()">
                ← BACK
            </button>

            <h1>🏷️ LABELLING</h1>

            <p class="lesson-intro">
                Labelling provides important information
                about a medicine and how it should be used.
            </p>

            <div class="lesson-card">

                <h2>🏷️ Important information</h2>

                <div class="example-item">
                    <strong>Medicine name</strong>
                    <p>Name of the medicine.</p>
                </div>

                <div class="example-item">
                    <strong>Active ingredient</strong>
                    <p>
                        The substance responsible for the
                        medicine's effect.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Dosage</strong>
                    <p>
                        How much medicine should be taken.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Expiry date</strong>
                    <p>
                        The date after which the medicine
                        should not be used.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Batch number</strong>
                    <p>
                        A number used to identify a particular
                        batch of medicine.
                    </p>
                </div>

                <div class="example-item">
                    <strong>Storage conditions</strong>
                    <p>
                        Information about how and where
                        the medicine should be stored.
                    </p>
                </div>

            </div>
            <div class="lesson-card">
                <h2>⚠️ Common labels</h2>

                <ul>
                    <li>For oral use</li>
                    <li>For external use only</li>
                    <li>Shake well before use</li>
                    <li>Store below 25°C</li>
                    <li>Keep out of reach of children</li>
                    <li>Do not exceed the recommended dose</li>
                </ul>
            </div>
<div class="lesson-card medicine-example">

                <h2>🔎 Read the label</h2>

                <p>
                    Click on different parts of the package
                    to learn what the information means.
                </p>

                <div class="label-box">

                    <button class="label-item" onclick="showLabelInfo('name')">
                        PARACETAMOL
                    </button>

                    <button class="label-item" onclick="showLabelInfo('strength')">
                        500 mg
                    </button>

                    <button class="label-item" onclick="showLabelInfo('form')">
                        TABLETS
                    </button>

                    <button class="label-item" onclick="showLabelInfo('quantity')">
                        20 tablets
                    </button>

                    <button class="label-item" onclick="showLabelInfo('route')">
                        FOR ORAL USE
                    </button>

                    <button class="label-item" onclick="showLabelInfo('expiry')">
                        EXP 06/2029
                    </button>

                    <button class="label-item" onclick="showLabelInfo('batch')">
                        BATCH No. A4721
                    </button>

                    <button class="label-item" onclick="showLabelInfo('storage')">
                        STORE BELOW 25°C
                    </button>

                </div>

                <div id="label-info" class="label-info">
                    👆 Click on a label to learn more.
                </div>

            </div>
        </div>
    `;
}
function showLabelInfo(type) {

    const info = document.getElementById("label-info");

    const labels = {

        name: {
            title: "Medicine name",
            text: "PARACETAMOL is the name of the medicine."
        },

        strength: {
            title: "Strength",
            text: "500 mg shows the amount of active ingredient in one tablet."
        },

        form: {
            title: "Dosage form",
            text: "TABLETS tells us that the medicine is supplied in tablet form."
        },

        quantity: {
            title: "Quantity",
            text: "20 tablets tells us how many tablets are inside the package."
        },

        route: {
            title: "Route of administration",
            text: "FOR ORAL USE means that the medicine is taken by mouth."
        },

        expiry: {
            title: "Expiry date",
            text: "EXP 06/2029 means the medicine should not be used after June 2029."
        },

        batch: {
            title: "Batch number",
            text: "A batch number identifies a particular batch of medicine."
        },

        storage: {
            title: "Storage conditions",
            text: "STORE BELOW 25°C tells us how the medicine should be stored."
        }

    };

    info.innerHTML = `
        <strong>${labels[type].title}</strong>
        <p>${labels[type].text}</p>
    `;
}

function showLifestyle() {

    mainMenu.innerHTML = `
        <h2>🥗 HEALTHY LIFESTYLE</h2>

        <div class="section-buttons">

           <button class="section-button" onclick="showBalancedNutrition()">
    🥗
    <span>BALANCED NUTRITION</span>
</button>
            <button class="section-button" onclick="showObesity()">
    ⚠️
    <span>OBESITY & ITS CONSEQUENCES</span>
</button>
      <button class="section-button" onclick="showPhysicalActivity()">
    🏃
    <span>PHYSICAL ACTIVITY & SPORTS</span>
</button>  

            <button class="section-button" onclick="showHealthyHabits()">
    ❤️
    <span>HEALTHY & HARMFUL HABITS</span>
</button>

           <button class="section-button challenge" onclick="showLifestyleChallenge()">
    🏆
    <span>HEALTHY LIFESTYLE CHALLENGE</span>
</button>
<button class="section-button" onclick="showLifestyleSelfTest()">
    🔎
    <span>MY HEALTHY LIFESTYLE TEST</span>
</button>
        </div>

        <button class="back-button" onclick="showTopics()">
            ← BACK TO TOPICS
        </button>
    `;
}
function showBalancedNutrition() {

    mainMenu.innerHTML = `
        <h2>🥗 BALANCED NUTRITION</h2>

        <p class="section-intro">
            A balanced diet provides the body with the nutrients,
            energy and water it needs to grow, repair tissues and
            stay healthy.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">🥗</div>

            <h3>WHAT IS A BALANCED DIET?</h3>

            <p>
                A balanced diet includes different types of foods
                in appropriate amounts. It provides the body with
                essential nutrients such as proteins, carbohydrates,
                fats, vitamins, minerals and water.
            </p>

            <p>
                No single food contains everything the body needs.
                That is why eating a variety of foods is important
                for good health.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> A healthy diet is
                based on variety, balance and moderation.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🍎</div>

            <h3>FOOD GROUPS</h3>

            <p>
                A healthy diet can include fruits, vegetables,
                grains, protein-rich foods and dairy products or
                suitable alternatives.
            </p>

            <p>
                Different food groups provide different nutrients.
                For example, fruits and vegetables are important
                sources of vitamins, minerals and dietary fibre,
                while protein-rich foods help maintain body tissues.
            </p>

            <div class="example">
                💡 <strong>Tip:</strong> Try to include different
                types and colours of foods throughout the day.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🍗</div>

            <h3>PROTEINS</h3>

            <p>
                Proteins are important nutrients needed for growth,
                tissue repair and maintenance of muscles and other
                body structures.
            </p>

            <p>
                Protein can be found in foods such as meat, fish,
                eggs, dairy products, beans, lentils, peas, nuts
                and seeds.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> eggs, chicken,
                fish, beans, lentils and yoghurt.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🍞</div>

            <h3>CARBOHYDRATES</h3>

            <p>
                Carbohydrates are an important source of energy for
                the body. They can be found in foods such as bread,
                rice, pasta, potatoes, oats, fruits and many
                vegetables.
            </p>

            <p>
                Whole grains and other fibre-rich carbohydrate
                sources can also support normal digestion.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> oats, whole-grain
                bread, rice, potatoes and fruit.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🥑</div>

            <h3>FATS</h3>

            <p>
                Fats are also essential for the body. They provide
                energy and help the body absorb certain vitamins.
                They are also involved in normal cell functions.
            </p>

            <p>
                Sources of fats include nuts, seeds, vegetable oils,
                avocados, fish and dairy products.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Fat is an essential
                nutrient. The goal is not to remove it completely,
                but to include it as part of a balanced diet.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">💧</div>

            <h3>WATER & HYDRATION</h3>

            <p>
                Water is essential for life. It helps regulate body
                temperature, transport substances around the body,
                support digestion and maintain normal body functions.
            </p>

            <p>
                The amount of fluid a person needs can vary depending
                on age, activity, weather and other factors.
            </p>

            <div class="example">
                💡 <strong>Tip:</strong> Drink regularly throughout
                the day and pay attention to thirst.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">⚖️</div>

            <h3>BALANCE, VARIETY & MODERATION</h3>

            <p>
                Healthy eating is not about completely avoiding
                particular foods. It is about creating a balanced
                overall eating pattern.
            </p>

            <p>
                Foods high in added sugar, salt or saturated fat can
                be included less often or in smaller amounts, while
                nutrient-rich foods should make up an important part
                of the diet.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> Balance does not mean
                perfection. It means giving your body a variety of
                nutrients over time.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>KEY FACTS</h3>

            <p>
                ✔ The body needs many different nutrients.
            </p>

            <p>
                ✔ Variety helps provide different vitamins and minerals.
            </p>

            <p>
                ✔ Protein supports growth and tissue repair.
            </p>

            <p>
                ✔ Carbohydrates are an important source of energy.
            </p>

            <p>
                ✔ Fats are essential for normal body functions.
            </p>

            <p>
                ✔ Water is essential for hydration and many body processes.
            </p>

            <p>
                ✔ A balanced diet does not require perfect eating.
            </p>

        </div>

<div class="lesson-card balanced-plate-card">

    <div class="lesson-icon">🍽️</div>

    <h3>THE BALANCED PLATE</h3>

    <p>
        A balanced meal can contain different food groups.
        Click on each part of the plate to learn more.
    </p>

    <div class="balanced-plate">

        <button class="plate-part vegetables"
                onclick="showPlateInfo(
                    '🍎 FRUITS & VEGETABLES',
                    'Fruits and vegetables provide vitamins, minerals, dietary fibre and other important nutrients.'
                )">
            🍎
            <span>Fruits &<br>Vegetables</span>
        </button>

        <button class="plate-part carbohydrates"
                onclick="showPlateInfo(
                    '🍞 CARBOHYDRATES',
                    'Bread, rice, oats, pasta and potatoes provide carbohydrates, an important source of energy for the body.'
                )">
            🍞
            <span>Carbohydrates</span>
        </button>

        <button class="plate-part protein"
                onclick="showPlateInfo(
                    '🍗 PROTEIN',
                    'Meat, fish, eggs, beans and lentils provide protein, which is important for growth, maintenance and tissue repair.'
                )">
            🍗
            <span>Protein</span>
        </button>

        <button class="plate-part dairy"
                onclick="showPlateInfo(
                    '🥛 DAIRY & ALTERNATIVES',
                    'Milk, yoghurt, cheese and suitable alternatives can provide nutrients such as protein and calcium.'
                )">
            🥛
            <span>Dairy &<br>Alternatives</span>
        </button>

    </div>

    <div id="plateInfo" class="plate-info">
        💡 Click on a part of the plate to learn about it.
    </div>

</div>
        <button class="back-button" onclick="showLifestyle()">
            ← BACK TO HEALTHY LIFESTYLE
        </button>
    `;
}
function showPlateInfo(title, text) {

    const plateInfo = document.getElementById("plateInfo");

    plateInfo.innerHTML = `
        <strong>${title}</strong>
        <p>${text}</p>
    `;
}
function showObesity() {

    mainMenu.innerHTML = `

        <h2>⚠️ OBESITY & ITS CONSEQUENCES</h2>

        <p class="section-intro">
            Obesity is a complex health condition that can affect
            many organs and body systems. Understanding its causes,
            consequences, treatment and prevention is an important
            part of a healthy lifestyle.
        </p>


        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>WHAT IS OBESITY?</h3>

            <p>
                Obesity is a chronic disease in which excessive
                body fat can negatively affect health. It is a
                complex condition influenced by many biological,
                behavioural and environmental factors.
            </p>

            <p>
                Obesity is not simply a matter of willpower or
                personal choice. The body, genetics, lifestyle,
                environment and social factors can all influence
                body weight.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Obesity is a complex
                medical condition, not a personal failure.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">📏</div>

            <h3>BODY MASS INDEX (BMI)</h3>

            <p>
                Body Mass Index, or BMI, is a measurement calculated
                from a person's weight and height. It is commonly
                used as a screening tool for classifying weight
                categories in adults.
            </p>

            <p>
                BMI is calculated by dividing body weight in
                kilograms by height in metres squared.
            </p>

            <div class="example">
                💡 <strong>Important:</strong> BMI is a screening
                tool and does not directly measure body fat or
                describe a person's complete health.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🔍</div>

            <h3>CAUSES & RISK FACTORS</h3>

            <p>
                Obesity usually develops as a result of several
                factors rather than one single cause.
            </p>

            <p>
                These factors can include genetics, eating patterns,
                physical activity, sleep, stress, certain medicines,
                medical conditions, living environment and access
                to healthy food and opportunities for exercise.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> Body weight is
                influenced by many factors working together.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">⚠️</div>

            <h3>HEALTH CONSEQUENCES</h3>

            <p>
                Obesity can increase the risk of developing several
                health problems.
            </p>

            <p>
                These can include type 2 diabetes, high blood
                pressure, cardiovascular disease, certain cancers,
                sleep apnoea, fatty liver disease and problems
                affecting the joints.
            </p>

            <p>
                Obesity can also affect mental wellbeing and quality
                of life.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> The health effects
                of obesity can involve many different organs and
                body systems.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🩺</div>

            <h3>TREATMENT</h3>

            <p>
                Treatment depends on the person's age, health,
                individual needs and other factors. It is usually
                based on long-term changes rather than a short-term
                diet.
            </p>

            <p>
                Treatment can include healthier eating patterns,
                regular physical activity, behavioural support and
                medical monitoring.
            </p>

            <p>
                For some people, healthcare professionals may also
                consider medicines or metabolic and bariatric
                surgery when appropriate.
            </p>

            <div class="example">
                💡 <strong>Important:</strong> Obesity treatment
                should be individualised and discussed with
                qualified healthcare professionals.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🛡️</div>

            <h3>PREVENTION</h3>

            <p>
                Prevention focuses on healthy habits that can be
                maintained over time.
            </p>

            <p>
                Important factors include a balanced diet, regular
                physical activity, sufficient sleep, limiting
                excessive intake of foods high in added sugar,
                salt and saturated fat, and maintaining healthy
                daily routines.
            </p>

            <p>
                Prevention should begin early and should support
                healthy growth and development rather than
                encouraging extreme dieting.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> Healthy habits are
                more important than achieving a perfect body.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>KEY FACTS</h3>

            <p>
                ✔ Obesity is a complex chronic health condition.
            </p>

            <p>
                ✔ Many different factors can influence body weight.
            </p>

            <p>
                ✔ Obesity can increase the risk of several diseases.
            </p>

            <p>
                ✔ Treatment should be individualised.
            </p>

            <p>
                ✔ Healthy eating and physical activity are important
                parts of prevention and treatment.
            </p>

            <p>
                ✔ Extreme diets are not a healthy long-term solution.
            </p>

        </div>
<div class="lesson-card">

    <div class="lesson-icon">🎥</div>

    <h3>VIDEO: OBESITY</h3>

    <p>
        Watch this short educational video to learn more about
        obesity and how small lifestyle changes can support health.
    </p>

    <div class="video-container">
        <iframe
            src="https://www.youtube-nocookie.com/embed/D--AtATgfyM"
            title="Obesity: The Little Things"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>

</div>

        <button class="back-button" onclick="showLifestyle()">
            ← BACK TO HEALTHY LIFESTYLE
        </button>

    `;
}
function showPhysicalActivity() {

    mainMenu.innerHTML = `

        <h2>🏃 PHYSICAL ACTIVITY & SPORTS</h2>

        <p class="section-intro">
            Learn how physical activity affects the body,
            why movement is important and how to exercise safely.
        </p>

        <div class="section-buttons">

            <button class="section-button" onclick="showWhatIsPhysicalActivity()">
                🧠
                <span>WHAT IS PHYSICAL ACTIVITY?</span>
            </button>

            <button class="section-button" onclick="showBenefitsOfPhysicalActivity()">
                ❤️
                <span>BENEFITS OF PHYSICAL ACTIVITY</span>
            </button>

            <button class="section-button" onclick="showTypesOfPhysicalActivity()">
                🏋️
                <span>TYPES OF PHYSICAL ACTIVITY</span>
            </button>

            <button class="section-button" onclick="showSportsAndExercise()">
                ⚽
                <span>SPORTS & EXERCISE</span>
            </button>

            <button class="section-button" onclick="showWarmUpAndRecovery()">
                🔥
                <span>WARM-UP, COOL-DOWN & RECOVERY</span>
            </button>

            <button class="section-button" onclick="showPhysicalActivitySafety()">
                🚨
                <span>PHYSICAL ACTIVITY SAFETY</span>
            </button>

        </div>

        <button class="back-button" onclick="showLifestyle()">
            ← BACK TO HEALTHY LIFESTYLE
        </button>
    `;
}
function showWhatIsPhysicalActivity() {

    mainMenu.innerHTML = `

        <h2>🧠 WHAT IS PHYSICAL ACTIVITY?</h2>

        <p class="section-intro">
            Physical activity is an important part of a healthy
            lifestyle. It includes many types of movement and is
            not limited to sports or gym workouts.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">🏃</div>

            <h3>WHAT IS PHYSICAL ACTIVITY?</h3>

            <p>
                Physical activity is any movement of the body
                produced by muscles that requires energy.
            </p>

            <p>
                It includes movements that we perform during
                everyday life, work, transportation, recreation
                and exercise.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> walking, cycling,
                dancing, swimming, climbing stairs, gardening
                and doing household chores.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🚶</div>

            <h3>PHYSICAL ACTIVITY IN EVERYDAY LIFE</h3>

            <p>
                Physical activity does not always require special
                equipment or a visit to a gym. Many everyday
                activities involve movement and use energy.
            </p>

            <p>
                Walking to school or college, cleaning the house,
                working in the garden, carrying groceries and
                playing active games are all forms of physical
                activity.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Small amounts of
                movement throughout the day can add up to a more
                active lifestyle.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🏋️</div>

            <h3>PHYSICAL ACTIVITY, EXERCISE & SPORT</h3>

            <p>
                Physical activity is a broad term that includes
                all kinds of body movement that use energy.
            </p>

            <p>
                <strong>Exercise</strong> is a planned and
                structured type of physical activity performed
                to improve or maintain physical fitness and health.
            </p>

            <p>
                <strong>Sport</strong> usually involves physical
                activity performed according to specific rules
                and may include competition.
            </p>

            <div class="example">
                💡 <strong>For example:</strong> Walking to a shop
                is physical activity. A planned running workout is
                exercise. Playing football in a competition is sport.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">⚡</div>

            <h3>ENERGY & MOVEMENT</h3>

            <p>
                When we move, our muscles need energy. The body
                obtains this energy from nutrients in food and
                uses it to support muscle contraction and other
                processes involved in movement.
            </p>

            <p>
                The amount of energy used during physical activity
                depends on factors such as the type of activity,
                its intensity, duration and the individual person.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> More intense or
                longer-lasting activities generally require more
                energy.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🌱</div>

            <h3>PHYSICAL ACTIVITY & HEALTH</h3>

            <p>
                Regular physical activity supports many aspects
                of health. It can help maintain cardiovascular
                fitness, muscle strength, bone health, mobility
                and physical endurance.
            </p>

            <p>
                Physical activity can also support mental wellbeing,
                help reduce stress and contribute to healthy sleep.
            </p>

            <div class="example">
                💡 <strong>Important:</strong> Physical activity
                benefits the body in many ways and is not only
                related to body weight.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>KEY FACTS</h3>

            <p>✔ Physical activity is any body movement that uses energy.</p>
            <p>✔ It includes everyday movement as well as exercise and sport.</p>
            <p>✔ Exercise is planned and structured physical activity.</p>
            <p>✔ Sport usually follows specific rules and may involve competition.</p>
            <p>✔ Physical activity supports both physical and mental health.</p>

        </div>

        <button class="back-button" onclick="showPhysicalActivity()">
            ← BACK TO PHYSICAL ACTIVITY
        </button>
    `;
}
function showBenefitsOfPhysicalActivity() {

    mainMenu.innerHTML = `

        <h2>❤️ BENEFITS OF PHYSICAL ACTIVITY</h2>

        <p class="section-intro">
            Regular physical activity affects many organs and
            systems of the body. Its benefits go far beyond
            improving physical fitness.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">❤️</div>

            <h3>CARDIOVASCULAR SYSTEM</h3>

            <p>
                Regular physical activity helps maintain the health
                of the heart and blood vessels. Exercise makes the
                cardiovascular system work harder, helping the body
                adapt to physical effort.
            </p>

            <p>
                Regular activity can improve cardiovascular fitness
                and help reduce the risk of some cardiovascular
                diseases.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> walking, running,
                cycling and swimming can train cardiovascular
                endurance.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">💪</div>

            <h3>MUSCLES & STRENGTH</h3>

            <p>
                Physical activity helps maintain muscle function,
                strength and endurance.
            </p>

            <p>
                Resistance exercises such as bodyweight exercises,
                resistance-band training and weight training can
                help develop and maintain muscle strength.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Muscles adapt to
                regular training, but they also need adequate
                recovery.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🦴</div>

            <h3>BONES & JOINTS</h3>

            <p>
                Regular movement helps maintain healthy bones and
                supports the musculoskeletal system.
            </p>

            <p>
                Weight-bearing activities can provide mechanical
                stress that supports bone health. Physical activity
                also helps maintain mobility and functional movement.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> walking, running,
                dancing and strength exercises can place useful
                loads on the musculoskeletal system.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🫁</div>

            <h3>RESPIRATORY SYSTEM</h3>

            <p>
                During physical activity, muscles need more oxygen
                and produce more carbon dioxide. As a result,
                breathing becomes faster and deeper.
            </p>

            <p>
                Regular aerobic activity can improve cardiorespiratory
                fitness, allowing the body to use oxygen more
                efficiently during physical effort.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> Your breathing
                naturally changes when your body's demand for
                oxygen increases.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>BRAIN & MENTAL WELLBEING</h3>

            <p>
                Physical activity can support mental wellbeing and
                brain health. Regular movement may help reduce
                stress and improve mood.
            </p>

            <p>
                Physical activity can also support cognitive
                function and may contribute to better concentration
                and overall wellbeing.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Exercise is not only
                about muscles — the brain benefits from movement too.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">😴</div>

            <h3>SLEEP & RECOVERY</h3>

            <p>
                Regular physical activity can contribute to healthy
                sleep. It may help people fall asleep more easily
                and support overall sleep quality.
            </p>

            <p>
                However, recovery is also important. The body needs
                enough rest between demanding activities.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> Training and recovery
                work together.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🌱</div>

            <h3>OVERALL HEALTH</h3>

            <p>
                Regular physical activity is associated with a
                lower risk of several chronic diseases and supports
                healthy functioning of the body throughout life.
            </p>

            <p>
                It can also help people maintain physical
                independence and quality of life.
            </p>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>KEY FACTS</h3>

            <p>✔ Physical activity supports cardiovascular fitness.</p>
            <p>✔ It helps maintain muscles and bones.</p>
            <p>✔ It supports cardiorespiratory fitness.</p>
            <p>✔ Movement can benefit mental wellbeing.</p>
            <p>✔ Regular activity can support healthy sleep.</p>
            <p>✔ Recovery is an important part of physical activity.</p>

        </div>

        <button class="back-button" onclick="showPhysicalActivity()">
            ← BACK TO PHYSICAL ACTIVITY
        </button>
    `;
}
function showTypesOfPhysicalActivity() {

    mainMenu.innerHTML = `

        <h2>🏋️ TYPES OF PHYSICAL ACTIVITY</h2>

        <p class="section-intro">
            Physical activity can be divided into several
            categories. Different types of activity develop
            different aspects of physical fitness.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">🏃</div>

            <h3>AEROBIC ACTIVITY</h3>

            <p>
                Aerobic activities involve large muscle groups
                working continuously for a period of time. They
                increase heart rate and breathing.
            </p>

            <p>
                Regular aerobic activity helps develop
                cardiorespiratory endurance.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> walking, running,
                cycling, swimming, dancing and many team sports.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">💪</div>

            <h3>STRENGTH & RESISTANCE TRAINING</h3>

            <p>
                Strength training involves muscles working against
                resistance. The resistance can come from body
                weight, free weights, resistance bands or machines.
            </p>

            <p>
                This type of exercise can help develop and maintain
                muscle strength and endurance.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> squats, push-ups,
                resistance-band exercises and weight training.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🧘</div>

            <h3>FLEXIBILITY</h3>

            <p>
                Flexibility is the ability of joints and surrounding
                tissues to move through an appropriate range of
                motion.
            </p>

            <p>
                Activities that involve controlled stretching and
                movement can help maintain flexibility and mobility.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> stretching exercises,
                yoga and mobility exercises.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">⚖️</div>

            <h3>BALANCE & COORDINATION</h3>

            <p>
                Balance is the ability to control the body's
                position. Coordination allows different parts of
                the body to work together efficiently.
            </p>

            <p>
                These abilities are important for everyday
                movement as well as many sports.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> balancing exercises,
                dancing, gymnastics and various sports.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🔄</div>

            <h3>WHY COMBINE DIFFERENT TYPES?</h3>

            <p>
                Different types of physical activity provide
                different benefits. A balanced exercise routine can
                include activities that develop endurance, strength,
                mobility, balance and coordination.
            </p>

            <p>
                The most suitable combination depends on a person's
                age, abilities, goals and health.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> There is no single
                exercise that trains every aspect of fitness.
            </div>

        </div>

        <button class="back-button" onclick="showPhysicalActivity()">
            ← BACK TO PHYSICAL ACTIVITY
        </button>
    `;
}
function showSportsAndExercise() {

    mainMenu.innerHTML = `

        <h2>⚽ SPORTS & EXERCISE</h2>

        <p class="section-intro">
            Exercise and sport are important forms of physical
            activity. They can improve fitness while also providing
            opportunities for recreation, skill development and
            social interaction.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">🏋️</div>

            <h3>WHAT IS EXERCISE?</h3>

            <p>
                Exercise is planned, structured and repetitive
                physical activity performed with the goal of
                improving or maintaining physical fitness or health.
            </p>

            <p>
                Exercise can focus on different aspects of fitness,
                including endurance, strength, flexibility, balance
                and coordination.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> running sessions,
                strength training, swimming workouts and planned
                cycling.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">⚽</div>

            <h3>WHAT IS SPORT?</h3>

            <p>
                Sport usually involves physical activity performed
                according to specific rules. Many sports involve
                competition between individuals or teams.
            </p>

            <p>
                Sports can develop physical abilities as well as
                skills such as coordination, reaction speed,
                decision-making and teamwork.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> football, basketball,
                volleyball, tennis, athletics and swimming.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🏃</div>

            <h3>ENDURANCE SPORTS</h3>

            <p>
                Endurance sports involve maintaining physical
                activity for a relatively long period of time.
                They require the body to continuously supply energy
                to working muscles.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> long-distance running,
                cycling and swimming.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">💪</div>

            <h3>STRENGTH & POWER SPORTS</h3>

            <p>
                Some sports and activities place greater demands
                on muscle strength or the ability to produce force
                quickly.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> weightlifting,
                throwing events and some forms of strength training.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🤝</div>

            <h3>TEAM SPORTS</h3>

            <p>
                Team sports combine physical activity with
                communication, cooperation and decision-making.
            </p>

            <p>
                Players need to work together while responding to
                changing situations during the game.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> football, basketball,
                volleyball and handball.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🎯</div>

            <h3>CHOOSING AN ACTIVITY</h3>

            <p>
                The best physical activity is one that is appropriate
                for a person's abilities, health, interests and
                circumstances.
            </p>

            <p>
                Enjoying an activity can make it easier to continue
                being active regularly.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Physical activity
                does not have to look the same for everyone.
            </div>

        </div>

        <button class="back-button" onclick="showPhysicalActivity()">
            ← BACK TO PHYSICAL ACTIVITY
        </button>
    `;
}
function showWarmUpAndRecovery() {

    mainMenu.innerHTML = `

        <h2>🔥 WARM-UP, COOL-DOWN & RECOVERY</h2>

        <p class="section-intro">
            Preparing the body for exercise and allowing it to
            recover afterwards are important parts of a safe and
            effective training routine.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">🔥</div>

            <h3>WHAT IS A WARM-UP?</h3>

            <p>
                A warm-up is a period of low-to-moderate intensity
                activity performed before more demanding exercise.
                It gradually prepares the body for physical effort.
            </p>

            <p>
                A warm-up can increase body temperature, gradually
                increase heart rate and breathing, and prepare the
                muscles and joints for movement.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> easy walking or
                jogging, gentle dynamic movements and movements
                similar to those used during the main activity.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">⚡</div>

            <h3>WHY IS WARM-UP IMPORTANT?</h3>

            <p>
                Starting intense exercise suddenly places a greater
                demand on the cardiovascular and musculoskeletal
                systems.
            </p>

            <p>
                A gradual warm-up helps the body transition from
                rest to exercise and allows a person to prepare
                physically and mentally for the activity.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> A warm-up should
                prepare you for exercise, not exhaust you before
                the workout begins.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🧘</div>

            <h3>WHAT IS A COOL-DOWN?</h3>

            <p>
                A cool-down is a period of gradually decreasing
                activity after exercise.
            </p>

            <p>
                Instead of stopping suddenly after intense activity,
                gradually reducing the intensity allows the body to
                transition back toward its resting state.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> slow walking after
                running or gradually reducing the intensity of
                cycling.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">💤</div>

            <h3>RECOVERY</h3>

            <p>
                Recovery is the process during which the body
                restores itself after physical activity.
            </p>

            <p>
                Recovery includes adequate rest, sleep, nutrition
                and hydration. The amount of recovery needed depends
                on the type and intensity of exercise and the
                individual person.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> Training is only one
                part of progress. Recovery is also essential.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">💪</div>

            <h3>WHY DO MUSCLES NEED RECOVERY?</h3>

            <p>
                Physical training places stress on the muscles.
                During recovery, the body repairs and adapts to
                this stress.
            </p>

            <p>
                Without enough recovery, repeated demanding
                exercise can contribute to excessive fatigue and
                may increase the risk of overuse injuries.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> More training is not
                always better. The body needs time to adapt.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">😴</div>

            <h3>SLEEP & RECOVERY</h3>

            <p>
                Sleep is an important part of recovery. During
                sleep, the body carries out many processes involved
                in restoration and normal functioning.
            </p>

            <p>
                Regular sleep is especially important for people
                who exercise frequently or participate in demanding
                physical activities.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> A healthy training
                routine includes both activity and sufficient rest.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>KEY FACTS</h3>

            <p>✔ A warm-up gradually prepares the body for exercise.</p>
            <p>✔ A cool-down gradually reduces exercise intensity.</p>
            <p>✔ Recovery allows the body to adapt to training.</p>
            <p>✔ Sleep, nutrition and hydration support recovery.</p>
            <p>✔ Rest is an important part of a training programme.</p>

        </div>

        <button class="back-button" onclick="showPhysicalActivity()">
            ← BACK TO PHYSICAL ACTIVITY
        </button>
    `;
}
function showPhysicalActivitySafety() {

    mainMenu.innerHTML = `

        <h2>🚨 PHYSICAL ACTIVITY SAFETY</h2>

        <p class="section-intro">
            Physical activity has many benefits, but exercise should
            be performed safely and appropriately for the individual.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">📈</div>

            <h3>INCREASE INTENSITY GRADUALLY</h3>

            <p>
                The body needs time to adapt to changes in physical
                activity. Increasing the duration, frequency or
                intensity of exercise too quickly can place excessive
                stress on the body.
            </p>

            <p>
                Training load should generally be increased
                gradually and according to the person's abilities
                and experience.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Progress does not
                require doing everything at maximum intensity.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🎯</div>

            <h3>USE CORRECT TECHNIQUE</h3>

            <p>
                Correct technique helps a person perform movements
                effectively and can reduce unnecessary stress on
                muscles, joints and other structures.
            </p>

            <p>
                Beginners should learn movements correctly before
                increasing the amount of resistance or intensity.
            </p>

            <div class="example">
                💡 <strong>Key idea:</strong> Good technique is
                more important than lifting the heaviest weight
                possible.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">💧</div>

            <h3>HYDRATION</h3>

            <p>
                The body loses water through sweat and breathing,
                especially during prolonged or intense physical
                activity and in hot conditions.
            </p>

            <p>
                Drinking fluids regularly helps maintain normal
                hydration. Fluid needs vary depending on factors
                such as activity, temperature and individual needs.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Do not ignore signs
                of dehydration such as unusual thirst, dizziness
                or weakness.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">☀️</div>

            <h3>EXERCISING IN HOT WEATHER</h3>

            <p>
                Hot and humid conditions can increase the risk of
                overheating and dehydration during physical activity.
            </p>

            <p>
                In hot weather, it is important to consider the
                temperature, choose suitable clothing, drink fluids
                and avoid unnecessarily intense exercise during the
                hottest part of the day.
            </p>

            <div class="example">
                💡 <strong>Important:</strong> If you feel
                overheated or unwell, stop exercising and move to
                a cooler environment.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">👟</div>

            <h3>APPROPRIATE EQUIPMENT</h3>

            <p>
                Suitable clothing and footwear can make physical
                activity more comfortable and safer.
            </p>

            <p>
                Equipment should be appropriate for the activity
                and used according to instructions.
            </p>

            <div class="example">
                💡 <strong>Examples:</strong> comfortable
                sportswear, suitable footwear and properly adjusted
                protective equipment when required.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🛑</div>

            <h3>WHEN SHOULD YOU STOP EXERCISING?</h3>

            <p>
                Exercise should be stopped if a person develops
                severe or unusual symptoms during physical activity.
            </p>

            <p>
                Warning signs can include severe chest pain,
                fainting, severe dizziness, significant difficulty
                breathing or sudden serious weakness.
            </p>

            <p>
                Depending on the symptoms and their severity,
                appropriate medical help may be needed.
            </p>

            <div class="example">
                🚨 <strong>Important:</strong> Do not try to
                "push through" severe or unusual symptoms.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🩺</div>

            <h3>HEALTH CONDITIONS & EXERCISE</h3>

            <p>
                People with certain medical conditions, injuries or
                symptoms may need individual advice about physical
                activity.
            </p>

            <p>
                Healthcare professionals can help determine which
                types and levels of activity are appropriate for a
                person's health and circumstances.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Exercise programmes
                should be adapted when necessary to individual
                health needs.
            </div>

        </div>

        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>KEY FACTS</h3>

            <p>✔ Increase training load gradually.</p>
            <p>✔ Use appropriate technique and equipment.</p>
            <p>✔ Pay attention to hydration and environmental conditions.</p>
            <p>✔ Allow enough time for recovery.</p>
            <p>✔ Stop exercising if severe or unusual symptoms occur.</p>
            <p>✔ Individual health conditions may require professional advice.</p>

        </div>

        <button class="back-button" onclick="showPhysicalActivity()">
            ← BACK TO PHYSICAL ACTIVITY
        </button>
    `;
}
function showHealthyHabits() {

    mainMenu.innerHTML = `

        <h2>❤️ HEALTHY & HARMFUL HABITS</h2>

        <p class="section-intro">
            Everyday habits can influence our physical health,
            mental wellbeing and quality of life. Learn how harmful
            habits affect the body and how healthy habits can support it.
        </p>

        <div class="section-buttons">

            <button class="section-button" onclick="showHarmfulHabits()">
                ⚠️
                <span>HARMFUL HABITS</span>
            </button>

            <button class="section-button" onclick="showHealthyHabitsTheory()">
                🌱
                <span>HEALTHY HABITS</span>
            </button>

        </div>

        <button class="back-button" onclick="showLifestyle()">
            ← BACK TO HEALTHY LIFESTYLE
        </button>
    `;
}
function showHarmfulHabits() {

    mainMenu.innerHTML = `

        <h2>⚠️ HARMFUL HABITS</h2>

        <p class="section-intro">
            Some habits can gradually affect the body, brain and
            quality of life. Their effects are not always immediate,
            which makes them easy to underestimate.
        </p>

        <div class="lesson-card">

            <div class="lesson-icon">🚬</div>

            <h3>SMOKING & NICOTINE</h3>

            <p>
                Tobacco smoke contains many harmful chemicals that can
                damage the lungs and blood vessels. Smoking increases the
                risk of cardiovascular and respiratory diseases and can
                reduce lung function.
            </p>

            <p>
                Nicotine affects the brain's reward system and can create
                a strong urge to use nicotine again. This is one of the
                reasons why nicotine dependence can develop.
            </p>

            <div class="example">
                💡 <strong>Important:</strong> Vapes and other nicotine
                products are not harmless simply because they do not
                produce traditional cigarette smoke.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🍺</div>

            <h3>ALCOHOL</h3>

            <p>
                Alcohol affects the central nervous system. It can change
                coordination, reaction time, judgement and memory.
                Long-term excessive alcohol use can damage organs such as
                the liver, heart and brain.
            </p>

            <p>
                The developing brain is especially sensitive to harmful
                influences, which is why alcohol use during adolescence
                carries additional risks.
            </p>

            <div class="example">
                🧠 Alcohol does not simply affect behaviour — it changes
                how the brain and nervous system function.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">💊</div>

            <h3>PSYCHOACTIVE SUBSTANCES</h3>

            <p>
                Psychoactive substances affect the brain and can change
                mood, perception, behaviour or consciousness. Some can
                cause dependence and serious damage to the nervous system,
                heart, liver or other organs.
            </p>

            <p>
                The risks can become especially serious when substances
                are combined or when a person does not know what a
                substance actually contains.
            </p>

            <div class="example">
                🚨 Serious poisoning or overdose can become a medical
                emergency and may require immediate professional help.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🍔</div>

            <h3>UNHEALTHY EATING PATTERNS</h3>

            <p>
                An unhealthy diet is not about one particular food.
                Problems usually appear when the overall eating pattern
                lacks variety or regularly contains too much added
                sugar, salt or saturated fat and too little fibre and
                nutrient-rich food.
            </p>

            <p>
                Regular overeating or very restrictive eating patterns
                can also interfere with normal energy balance and
                wellbeing.
            </p>

            <div class="example">
                🥗 Healthy nutrition is about the overall pattern,
                variety and balance — not about making individual foods
                "good" or "bad".
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">📱</div>

            <h3>EXCESSIVE SCREEN TIME</h3>

            <p>
                Screens are a normal part of modern life, and not all
                screen use is harmful. However, spending very long
                periods sitting and looking at a screen can reduce
                physical activity and may contribute to eye strain,
                poor posture and sleep problems.
            </p>

            <p>
                Using a phone or computer late at night can be especially
                disruptive because bright light and stimulating content
                may make it harder to fall asleep.
            </p>

            <div class="example">
                👀 The problem is usually not the screen itself, but
                how much time it replaces movement, sleep and real-life
                activities.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">😴</div>

            <h3>SLEEP DEPRIVATION</h3>

            <p>
                Sleep is essential for the brain and body. Too little
                sleep can affect attention, memory, learning, reaction
                time and emotional regulation.
            </p>

            <p>
                Long-term insufficient sleep can also interfere with
                immune function, metabolism and overall health.
            </p>

            <div class="example">
                🧠 Sleep is not "doing nothing". During sleep, the body
                and brain perform important processes that support
                recovery and normal functioning.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>HOW HARMFUL HABITS BECOME ADDICTIVE</h3>

            <p>
                Some harmful behaviours become difficult to control
                because they activate the brain's reward and
                reinforcement systems.
            </p>

            <p>
                Repeated exposure can strengthen the connection between
                a behaviour and a feeling of reward or relief. Over time,
                a person may develop tolerance, dependence or withdrawal
                symptoms.
            </p>

            <p>
                Addiction is not simply a lack of willpower. It involves
                changes in brain function and behaviour and may require
                professional support.
            </p>

            <div class="example">
                🔄 A habit can become a cycle:
                <strong>trigger → behaviour → short-term reward → repetition.</strong>
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">📌</div>

            <h3>KEY FACTS</h3>

            <p>
                • Harmful habits often develop gradually.<br>
                • Their effects may accumulate over time.<br>
                • Dependence can make stopping difficult.<br>
                Prevention and early support can reduce health risks.<br>
                • Asking for professional help is a sign of taking care
                of your health, not a weakness.
            </p>

        </div>


        <button class="back-button" onclick="showHealthyHabits()">
            ← BACK TO HEALTHY & HARMFUL HABITS
        </button>

    `;
}
function showHealthyHabitsTheory() {

    mainMenu.innerHTML = `

        <h2>🌱 HEALTHY HABITS</h2>

        <p class="section-intro">
            Healthy habits are everyday behaviours that support the
            normal functioning of the body, mental wellbeing and
            long-term health.
        </p>


        <div class="lesson-card">

            <div class="lesson-icon">🥗</div>

            <h3>BALANCED EATING</h3>

            <p>
                A healthy eating pattern provides the body with enough
                energy and a variety of nutrients. It should include
                different food groups such as vegetables and fruits,
                grains, protein-rich foods and suitable dairy or
                alternatives.
            </p>

            <p>
                Variety is important because different foods provide
                different nutrients. A balanced diet also means allowing
                enough food for the body's needs rather than constantly
                restricting or overeating.
            </p>

            <div class="example">
                💡 Think about the whole eating pattern, not one
                individual meal or food.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🏃</div>

            <h3>REGULAR PHYSICAL ACTIVITY</h3>

            <p>
                Regular movement supports the cardiovascular system,
                muscles, bones and joints. Physical activity can also
                improve sleep, mood and overall physical fitness.
            </p>

            <p>
                It does not have to mean intensive sports. Walking,
                cycling, dancing, recreational activities and everyday
                movement can all contribute to an active lifestyle.
            </p>

            <div class="example">
                ⚡ The best activity is often the one you can do
                regularly and safely.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">😴</div>

            <h3>HEALTHY SLEEP</h3>

            <p>
                Sleep allows the body and brain to recover. During sleep,
                important processes related to memory, learning, immune
                function and tissue repair take place.
            </p>

            <p>
                A regular sleep schedule, a comfortable sleeping
                environment and reducing stimulating activities before
                bedtime can support better sleep.
            </p>

            <div class="example">
                🌙 Good sleep is part of health — not wasted time.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">💧</div>

            <h3>HYDRATION</h3>

            <p>
                Water is essential for many processes in the body.
                It helps regulate body temperature, transport substances
                and maintain normal physiological functions.
            </p>

            <p>
                Fluid needs vary depending on factors such as age,
                activity, temperature and health. During exercise or hot
                weather, the body may lose more water through sweat.
            </p>

            <div class="example">
                💧 Thirst, urine colour and the situation around you can
                provide useful clues about hydration needs.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🧼</div>

            <h3>PERSONAL HYGIENE</h3>

            <p>
                Personal hygiene helps reduce the spread of infectious
                microorganisms and keeps the skin, teeth and body healthy.
            </p>

            <p>
                Important habits include regular handwashing, oral
                hygiene, bathing or showering when needed, changing
                clothes and taking care of wounds properly.
            </p>

            <div class="example">
                🦠 Handwashing is one of the simplest ways to reduce
                the transmission of many infections.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🧠</div>

            <h3>MENTAL WELLBEING & STRESS MANAGEMENT</h3>

            <p>
                Mental health is an important part of overall health.
                Stress is a normal response to difficult situations,
                but prolonged or overwhelming stress can affect sleep,
                concentration, mood and physical wellbeing.
            </p>

            <p>
                Helpful strategies may include regular movement,
                sufficient sleep, relaxing activities, spending time
                with supportive people and taking breaks when needed.
            </p>

            <div class="example">
                💬 Asking for help when stress becomes difficult to
                manage is a healthy behaviour, not a weakness.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">🩺</div>

            <h3>REGULAR HEALTHCARE & PREVENTION</h3>

            <p>
                Healthcare is not only about treating illness. Preventive
                care helps detect health problems early and supports
                healthy development.
            </p>

            <p>
                Depending on age and individual needs, prevention may
                include vaccinations, dental care, medical check-ups,
                screening when appropriate and discussing concerning
                symptoms with a healthcare professional.
            </p>

            <div class="example">
                🔎 Finding a problem early can make it easier to manage.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">✨</div>

            <h3>HEALTHY HABITS WORK TOGETHER</h3>

            <p>
                Healthy habits are connected. For example, regular
                physical activity can support sleep, good sleep can
                improve concentration and mood, and balanced nutrition
                provides the energy needed for everyday activity.
            </p>

            <p>
                There is no need to change everything at once. Small,
                realistic habits that can be maintained over time are
                often more useful than extreme short-term changes.
            </p>

            <div class="example">
                🌱 Health is built from many small choices repeated
                over time.
            </div>

        </div>


        <div class="lesson-card">

            <div class="lesson-icon">📌</div>

            <h3>KEY FACTS</h3>

            <p>
                • Healthy habits support both physical and mental health.<br>
                • Nutrition, movement, sleep and hydration are connected.<br>
                • Hygiene helps protect against infections.<br>
                • Preventive healthcare can detect problems early.<br>
                • Consistency is usually more important than perfection.
            </p>

        </div>


        <button class="back-button" onclick="showHealthyHabits()">
            ← BACK TO HEALTHY & HARMFUL HABITS
        </button>

    `;
}
function showLifestyleChallenge() {

    mainMenu.innerHTML = `

        <h2>🏆 HEALTHY LIFESTYLE CHALLENGE</h2>

        <p class="section-intro">
            Test your knowledge about nutrition, obesity,
            physical activity and healthy habits.
        </p>

        <div class="challenge-status">

            <div class="status-box">
                ❤️ HP
                <strong id="healthHP">100</strong>
            </div>

            <div class="status-box">
                ⭐ XP
                <strong id="healthXP">0</strong>
            </div>

        </div>

        <div id="challengeContent"></div>

    `;

    startHealthyChallenge();
}
let healthyChallengeQuestions = [

    {
        question: "Which nutrient is especially important for growth, tissue repair and maintaining muscles?",
        options: [
            "Protein",
            "Water",
            "Dietary fibre",
            "Vitamin C"
        ],
        correct: 0,
        explanation: "Protein is needed for growth, maintenance and repair of body tissues."
    },

    {
        question: "Which activity is an example of aerobic exercise?",
        options: [
            "Sitting and reading",
            "Brisk walking",
            "Sleeping",
            "Stretching one muscle"
        ],
        correct: 1,
        explanation: "Brisk walking is an aerobic activity because it increases heart rate and uses large muscle groups."
    },

    {
        question: "Why is sleep important for the body?",
        options: [
            "It stops the body from using energy",
            "It supports recovery, memory and normal brain function",
            "It replaces physical activity",
            "It prevents all illnesses"
        ],
        correct: 1,
        explanation: "Sleep supports recovery, learning, memory, immune function and many other processes."
    },

    {
        question: "Which statement about a balanced diet is correct?",
        options: [
            "Only vegetables should be eaten",
            "All fats should be completely avoided",
            "A variety of foods can provide different nutrients",
            "Skipping meals is the best way to stay healthy"
        ],
        correct: 2,
        explanation: "Different foods provide different nutrients, so variety is an important part of a balanced eating pattern."
    },

    {
        question: "What can regular physical activity support?",
        options: [
            "Only muscle growth",
            "Only weight loss",
            "Cardiovascular health, muscles, bones and mental wellbeing",
            "Nothing outside the muscles"
        ],
        correct: 2,
        explanation: "Physical activity benefits many systems of the body and can also support mood and sleep."
    },

    {
        question: "What is one important reason to warm up before exercise?",
        options: [
            "To make exercise unnecessary",
            "To prepare the body for physical activity",
            "To completely prevent injuries",
            "To make muscles permanently stronger"
        ],
        correct: 1,
        explanation: "A warm-up gradually prepares the body for exercise by increasing movement and activity intensity."
    },

    {
        question: "Which habit can negatively affect sleep?",
        options: [
            "Keeping a regular sleep schedule",
            "Having a relaxing bedtime routine",
            "Using a phone late at night with stimulating content",
            "Sleeping in a comfortable environment"
        ],
        correct: 2,
        explanation: "Late-night screen use and stimulating content can make it harder to fall asleep."
    },

    {
        question: "Which statement about obesity is most accurate?",
        options: [
            "It is caused only by a lack of willpower",
            "It has only one possible cause",
            "It can be influenced by many biological, behavioural and environmental factors",
            "It is always caused by eating one specific food"
        ],
        correct: 2,
        explanation: "Obesity is a complex condition influenced by multiple factors, including biology, behaviour and environment."
    },

    {
        question: "Why is hydration important?",
        options: [
            "Water is involved in many normal body processes",
            "Water provides all essential nutrients",
            "Water replaces the need for food",
            "Water prevents every disease"
        ],
        correct: 0,
        explanation: "Water is essential for processes such as temperature regulation and normal physiological functions."
    },

    {
        question: "Which habit can help reduce the spread of infections?",
        options: [
            "Avoiding all physical activity",
            "Regular handwashing",
            "Skipping sleep",
            "Drinking energy drinks"
        ],
        correct: 1,
        explanation: "Good hand hygiene can reduce the transmission of many infectious microorganisms."
    }

];

let healthyCurrentQuestion = 0;
let healthyHP = 100;
let healthyXP = 0;
function startHealthyChallenge() {

    healthyCurrentQuestion = 0;
    healthyHP = 100;
    healthyXP = 0;

    showHealthyQuestion();
}
function showHealthyQuestion() {

    const question = healthyChallengeQuestions[healthyCurrentQuestion];

    const challengeContent = document.getElementById("challengeContent");

    challengeContent.innerHTML = `

        <div class="challenge-card">

            <div class="question-number">
                QUESTION ${healthyCurrentQuestion + 1}
                / ${healthyChallengeQuestions.length}
            </div>

            <h3>${question.question}</h3>

            <div class="answer-options">

                ${question.options.map((option, index) => `
                    
                    <button
                        class="answer-button"
                        onclick="checkHealthyAnswer(${index})">
                        ${option}
                    </button>

                `).join("")}

            </div>

            <div id="answerFeedback"></div>

        </div>

    `;
}
function checkHealthyAnswer(selectedAnswer) {

    const question = healthyChallengeQuestions[healthyCurrentQuestion];
    const feedback = document.getElementById("answerFeedback");
    const buttons = document.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedAnswer === question.correct) {

        healthyXP += 10;

        feedback.innerHTML = `
            <div class="answer-feedback correct">

                <strong>✅ CORRECT!</strong>

                <p>
                    ${question.explanation}
                </p>

                <p class="xp-gain">
                    ⭐ +10 XP
                </p>

                <button class="next-question-button"
                        onclick="nextHealthyQuestion()">
                    NEXT QUESTION →
                </button>

            </div>
        `;

    } else {

        healthyHP -= 10;

        feedback.innerHTML = `
            <div class="answer-feedback wrong">

                <strong>❌ NOT QUITE!</strong>

                <p>
                    ${question.explanation}
                </p>

                <p class="hp-loss">
                    ❤️ -10 HP
                </p>

                <button class="next-question-button"
                        onclick="nextHealthyQuestion()">
                    NEXT QUESTION →
                </button>

            </div>
        `;
    }

    updateHealthyStatus();

    if (healthyHP <= 0) {
        showHealthyChallengeGameOver();
    }
}
function nextHealthyQuestion() {

    healthyCurrentQuestion++;

    if (healthyCurrentQuestion >= healthyChallengeQuestions.length) {
        showHealthyChallengeResult();
        return;
    }

    showHealthyQuestion();
}
function updateHealthyStatus() {

    const hp = document.getElementById("healthHP");
    const xp = document.getElementById("healthXP");

    if (hp) {
        hp.textContent = healthyHP;
    }

    if (xp) {
        xp.textContent = healthyXP;
    }
}
function showHealthyChallengeResult() {

    let resultTitle = "";
    let resultText = "";
    let achievement = "";

    if (healthyXP >= 90) {

        resultTitle = "🏆 HEALTH EXPERT!";
        resultText = "Outstanding! You have an excellent understanding of healthy lifestyle and health promotion.";
        achievement = "🎖️ ACHIEVEMENT UNLOCKED: HEALTH EXPERT";

    } else if (healthyXP >= 70) {

        resultTitle = "🌟 GREAT JOB!";
        resultText = "Excellent work! You have a strong understanding of healthy lifestyle principles.";
        achievement = "🎖️ ACHIEVEMENT UNLOCKED: HEALTHY CHOICES";

    } else if (healthyXP >= 50) {

        resultTitle = "👍 GOOD JOB!";
        resultText = "Nice work! You know the basics, but there is still more to discover.";
        achievement = "🎖️ ACHIEVEMENT UNLOCKED: HEALTHY MINDSET";

    } else {

        resultTitle = "📚 KEEP LEARNING!";
        resultText = "You completed the challenge! Review the topics and try again to improve your score.";
        achievement = "🎖️ ACHIEVEMENT UNLOCKED: CURIOUS MIND";
    }

    mainMenu.innerHTML = `

        <h2>${resultTitle}</h2>

        <p class="section-intro">
            ${resultText}
        </p>

        <div class="challenge-result">

            <div class="result-stat">
                ❤️
                <strong>${healthyHP}</strong>
                <span>HP LEFT</span>
            </div>

            <div class="result-stat">
                ⭐
                <strong>${healthyXP}</strong>
                <span>XP EARNED</span>
            </div>

            <div class="result-stat">
                📝
                <strong>${healthyCurrentQuestion + 1}</strong>
                <span>QUESTIONS</span>
            </div>

        </div>

        <div class="achievement-box">
            ${achievement}
        </div>

        <div class="result-buttons">

            <button class="next-question-button"
                    onclick="startHealthyChallenge()">
                🔄 TRY AGAIN
            </button>

            <button class="back-button"
                    onclick="showLifestyle()">
                ← BACK TO HEALTHY LIFESTYLE
            </button>

        </div>

    `;
}
let lifestyleTestQuestions = [

    {
        question: "How often do you eat a variety of foods from different food groups?",
        options: [
            "Almost every day",
            "Usually",
            "Sometimes",
            "Rarely"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How often do you get some form of physical activity?",
        options: [
            "Almost every day",
            "Several times a week",
            "Occasionally",
            "Almost never"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How would you describe your usual sleep?",
        options: [
            "Regular and usually restful",
            "Mostly good, but sometimes difficult",
            "Often irregular or not enough",
            "I regularly get very little sleep"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How often do you drink enough fluids during the day?",
        options: [
            "Usually",
            "Most days",
            "Sometimes",
            "Rarely"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How often do you spend time sitting or using screens for long periods without taking breaks?",
        options: [
            "Rarely",
            "Sometimes",
            "Often",
            "Very often"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How often do you wash your hands at important times, such as before eating?",
        options: [
            "Almost always",
            "Usually",
            "Sometimes",
            "Rarely"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How do you usually deal with stress?",
        options: [
            "I have healthy ways to relax and recover",
            "I usually manage it quite well",
            "Sometimes I struggle to cope",
            "I often feel overwhelmed by stress"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How often do you spend time doing things you enjoy or that help you relax?",
        options: [
            "Regularly",
            "Several times a week",
            "Occasionally",
            "Rarely"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How often do you use nicotine, alcohol or other psychoactive substances?",
        options: [
            "Never",
            "Rarely",
            "Sometimes",
            "Regularly"
        ],
        points: [3, 2, 1, 0]
    },

    {
        question: "How would you describe your overall daily routine?",
        options: [
            "I usually have a good balance of food, movement, sleep and rest",
            "Mostly balanced, with some areas to improve",
            "Quite irregular",
            "I rarely have a stable routine"
        ],
        points: [3, 2, 1, 0]
    }

];

let lifestyleTestCurrentQuestion = 0;
let lifestyleTestScore = 0;
function showLifestyleSelfTest() {

    mainMenu.innerHTML = `

        <h2>🔎 MY HEALTHY LIFESTYLE TEST</h2>

        <p class="section-intro">
            Answer 10 questions about your everyday habits.
            There are no right or wrong answers — be honest with yourself.
        </p>

        <div id="lifestyleTestContent"></div>

    `;

    lifestyleTestCurrentQuestion = 0;
    lifestyleTestScore = 0;

    showLifestyleTestQuestion();
}
function showLifestyleTestQuestion() {

    const question =
        lifestyleTestQuestions[lifestyleTestCurrentQuestion];

    const content =
        document.getElementById("lifestyleTestContent");

    content.innerHTML = `

        <div class="challenge-card">

            <div class="question-number">
                QUESTION ${lifestyleTestCurrentQuestion + 1}
                / ${lifestyleTestQuestions.length}
            </div>

            <h3>${question.question}</h3>

            <div class="answer-options">

                ${question.options.map((option, index) => `

                    <button
                        class="answer-button"
                        onclick="answerLifestyleTest(${index})">

                        ${option}

                    </button>

                `).join("")}

            </div>

        </div>

    `;
}
function answerLifestyleTest(answerIndex) {

    const question =
        lifestyleTestQuestions[lifestyleTestCurrentQuestion];

    lifestyleTestScore += question.points[answerIndex];

    lifestyleTestCurrentQuestion++;

    if (
        lifestyleTestCurrentQuestion >=
        lifestyleTestQuestions.length
    ) {
        showLifestyleTestResult();
    } else {
        showLifestyleTestQuestion();
    }
}
function showLifestyleTestResult() {

    let title = "";
    let text = "";
    let icon = "";

    if (lifestyleTestScore >= 27) {

        icon = "🌱";
        title = "VERY HEALTHY LIFESTYLE";
        text =
            "Your answers show many positive habits that support your health. Keep taking care of yourself and remember that nobody needs to be perfect.";

    } else if (lifestyleTestScore >= 21) {

        icon = "💚";
        title = "MOSTLY HEALTHY";
        text =
            "You have many healthy habits, although there may be a few areas that could be improved.";

    } else if (lifestyleTestScore >= 13) {

        icon = "🟡";
        title = "ROOM FOR IMPROVEMENT";
        text =
            "Some healthy habits are already present, but your answers suggest that several areas of your lifestyle could use more attention.";

    } else {

        icon = "🔴";
        title = "TIME TO TAKE A CLOSER LOOK";
        text =
            "Your answers suggest that some important health habits may need more attention. Small, realistic changes can be a good place to start.";
    }

    mainMenu.innerHTML = `

        <h2>${icon} ${title}</h2>

        <p class="section-intro">
            ${text}
        </p>

        <div class="challenge-result">

            <div class="result-stat">
                ⭐
                <strong>${lifestyleTestScore}/30</strong>
                <span>YOUR SCORE</span>
            </div>

        </div>

        <div class="achievement-box">

            💡 Remember: this test is an educational
            self-assessment, not a medical diagnosis.

        </div>

        <div class="result-buttons">

            <button class="next-question-button"
                    onclick="showLifestyleSelfTest()">
                🔄 TAKE THE TEST AGAIN
            </button>

            <button class="back-button"
                    onclick="showLifestyle()">
                ← BACK TO HEALTHY LIFESTYLE
            </button>

        </div>

    `;
}

function showPharmaceuticalForms()
{
    mainMenu.innerHTML = `
        <h2>💊 PHARMACEUTICAL FORMS</h2>

        <p class="section-intro">
            Medicines are available in different dosage forms.
            Choose a category to explore the most common pharmaceutical forms.
        </p>

        <div class="section-buttons">

           <button class="section-button" onclick="showSolidForms()">
    💊
    <span>SOLID DOSAGE FORMS</span>
</button>

            <button class="section-button" onclick="showSemiSolidForms()">
    🧴
    <span>SEMI-SOLID DOSAGE FORMS</span>
</button>

            <button class="section-button challenge" onclick="showLiquidForms()">
    💧
    <span>LIQUID DOSAGE FORMS</span>
</button>

        </div>

        <button class="back-button" onclick="showPharmacy()">
            ← BACK TO PHARMACY
        </button>
    `;
}
function showSolidForms() {

    mainMenu.innerHTML = `
        <h2>💊 SOLID DOSAGE FORMS</h2>

        <p class="section-intro">
            Solid dosage forms contain medicines in a solid state.
            Here are some of the most common examples.
        </p>

        <div class="lesson-card">

   <div class="lesson-card">

    <img
        class="form-image"
        src="images/tablets.jpg"
        alt="Tablets"
    >

    <span class="form-label">SOLID DOSAGE FORM</span>

    <h3>TABLETS</h3>
            <p>
                Tablets are solid dosage forms containing one or more
                active ingredients. They are usually taken by mouth.
            </p>

            <div class="example">
                💡 <strong>Example:</strong> Paracetamol tablets.
            </div>

        </div>

        <div class="lesson-card">

    <img
        class="form-image"
        src="images/capsules.jpg"
        alt="Capsules"
    >

    <span class="form-label">SOLID DOSAGE FORM</span>

    <h3>CAPSULES</h3>

            <p>
                Capsules contain medicine inside a soluble shell.
                They are usually taken by mouth.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Capsules have a shell
                surrounding the medicine.
            </div>

        </div>

       <div class="lesson-card">

    <img
        class="form-image"
        src="images/powders.jpg"
        alt="Powders"
    >

    <span class="form-label">SOLID DOSAGE FORM</span>

    <h3>POWDERS</h3>

            <p>
                Powders are dry, finely divided solid preparations.
                They can be taken by mouth or used in other ways,
                depending on the medicine.
            </p>

            <div class="example">
                💡 <strong>Useful word:</strong> dry preparation
            </div>

        </div>

        <button class="back-button" onclick="showPharmaceuticalForms()">
            ← BACK TO DOSAGE FORMS
        </button>
    `;
}
function showSemiSolidForms() {

    mainMenu.innerHTML = `
        <h2>🧴 SEMI-SOLID DOSAGE FORMS</h2>

        <p class="section-intro">
            Semi-solid dosage forms are preparations that have
            a soft or creamy consistency and are often applied to the skin.
        </p>

        <div class="lesson-card">

    <img
        class="form-image"
        src="images/ointments.jpg"
        alt="Ointments"
    >

    <span class="form-label">SEMI-SOLID DOSAGE FORM</span>

    <h3>OINTMENTS</h3>

            <p>
                Ointments are semi-solid preparations intended
                mainly for application to the skin.
            </p>

            <div class="example">
                💡 <strong>Useful word:</strong> topical
            </div>

        </div>

       <div class="lesson-card">

    <img
        class="form-image"
        src="images/creams.jpg"
        alt="Creams"
    >

    <span class="form-label">SEMI-SOLID DOSAGE FORM</span>

    <h3>CREAMS</h3>

            <p>
                Creams are semi-solid preparations that are
                usually applied to the skin.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> Creams are usually
                lighter than ointments.
            </div>

        </div>
<div class="lesson-card">

    <img
        class="form-image"
        src="images/gels.jpg"
        alt="Gels"
    >

    <span class="form-label">SEMI-SOLID DOSAGE FORM</span>

    <h3>GELS</h3>
        

            <p>
                Gels are semi-solid preparations with a
                gel-like consistency. They are often applied
                to the skin.
            </p>

            <div class="example">
                💡 <strong>Useful word:</strong> gel-like consistency
            </div>

        </div>

        <button class="back-button" onclick="showPharmaceuticalForms()">
            ← BACK TO DOSAGE FORMS
        </button>
    `;
}
function showLiquidForms() {

    mainMenu.innerHTML = `
        <h2>💧 LIQUID DOSAGE FORMS</h2>

        <p class="section-intro">
            Liquid dosage forms contain medicines in a liquid state.
            They can be taken by mouth or used in other ways,
            depending on the preparation.
        </p>

        <div class="lesson-card">

    <img
        class="form-image"
        src="images/syrups.jpg"
        alt="Syrups"
    >

    <span class="form-label">LIQUID DOSAGE FORM</span>

    <h3>SYRUPS</h3>

            <p>
                Syrups are liquid pharmaceutical preparations
                intended mainly for oral use. They often contain
                a sweetener.
            </p>

            <div class="example">
                💡 <strong>Example:</strong> Cough syrup.
            </div>

        </div>

        <div class="lesson-card">

    <img
        class="form-image"
        src="images/solutions.jpg"
        alt="Solutions"
    >

    <span class="form-label">LIQUID DOSAGE FORM</span>

    <h3>SOLUTIONS</h3>

            <p>
                Solutions are liquid preparations in which
                one or more substances are completely dissolved
                in a liquid.
            </p>

            <div class="example">
                💡 <strong>Useful word:</strong> dissolved
            </div>

        </div>

        <div class="lesson-card">

    <img
        class="form-image"
        src="images/suspensions.jpg"
        alt="Suspensions"
    >

    <span class="form-label">LIQUID DOSAGE FORM</span>

    <h3>SUSPENSIONS</h3>

            <p>
                Suspensions are liquid preparations containing
                fine solid particles that are dispersed in a liquid.
            </p>

            <div class="example">
                💡 <strong>Remember:</strong> The particles may
                settle at the bottom.
            </div>

        </div>

        <button class="back-button" onclick="showPharmaceuticalForms()">
            ← BACK TO DOSAGE FORMS
        </button>
    `;
}
function showPrescriptions() {

    mainMenu.innerHTML = `
    
        <div class="lesson-page">

             <button class="back-btn" onclick="showPharmacy()">
                ← BACK
            </button>
            <h1>📋 PRESCRIPTIONS</h1>

            <div class="lesson-intro">
                <p>
                    Learn how prescriptions are written,
                    read and understood.
                </p>
            </div>

            <div class="menu-grid">

            

                <div class="menu-card" onclick="showPrescriptionTheory()">
    <div class="menu-icon">📖</div>
    <h2>WHAT IS A PRESCRIPTION?</h2>
    <p>Learn what a prescription is.</p>
</div>

               <div class="menu-card" onclick="showPrescriptionLatin()">
                    <div class="menu-icon">⚕️</div>
                    <h2>LATIN IN PRESCRIPTIONS</h2>
                    <p>Learn common Latin terms.</p>
                </div>

               <div class="menu-card" onclick="showPrescriptionParts()">
                    <div class="menu-icon">🔎</div>
                    <h2>READ A PRESCRIPTION</h2>
                    <p>Practice reading a prescription.</p>
                </div>

            </div>

        </div>
    `;
}
function showPrescriptionTheory() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showPrescriptions()">
                ← BACK
            </button>

            <h1>📖 WHAT IS A PRESCRIPTION?</h1>

            <div class="lesson-intro">
                <p>
                    A prescription is a written instruction from a healthcare professional
                    to a pharmacist about the preparation and dispensing of a medicine.
                </p>
            </div>

            <div class="lesson-card">

                <h2>💊 What is a prescription?</h2>

                <p>
                    A prescription is an official medical document that contains
                    information about a medicine, its dosage, quantity and instructions
                    for the patient.
                </p>

                <p>
                    Prescriptions allow pharmacists to understand exactly which medicine
                    should be dispensed and how it should be used.
                </p>

            </div>

            <div class="lesson-card important">

                <h2>📋 A prescription usually contains:</h2>

                <div class="example-item">
                    <strong>1. Medicine name</strong>
                    <p>The name of the prescribed medicine.</p>
                </div>

                <div class="example-item">
                    <strong>2. Dosage</strong>
                    <p>The amount of active substance in one dose.</p>
                </div>

                <div class="example-item">
                    <strong>3. Quantity</strong>
                    <p>The number of doses or units to be dispensed.</p>
                </div>

                <div class="example-item">
                    <strong>4. Directions</strong>
                    <p>Instructions explaining how the medicine should be used.</p>
                </div>

            </div>

            <div class="lesson-card">

                <h2>🧾 Example of a prescription</h2>

                <div class="prescription-paper">

                    <div class="prescription-header">
                        PRESCRIPTIO
                    </div>

                    <div class="prescription-latin">

                        <strong>Rp.:</strong>

                        <div class="prescription-text">
                            Paracetamoli 0,5<br>
                            D.t.d. N. 20<br>
                            S. 1 tabulettam bis in die.
                        </div>

                    </div>

                </div>

            </div>

            <div class="lesson-card">

                <h2>🔎 How to understand it</h2>

                <div class="example-item">
                    <strong>Rp. — Recipe</strong>
                    <p>Means “Take”. It begins the prescription.</p>
                </div>

                <div class="example-item">
                    <strong>Paracetamoli 0,5</strong>
                    <p>
                        The medicine is paracetamol, 0.5 g per dose.
                    </p>
                </div>

                <div class="example-item">
                    <strong>D.t.d. N. 20</strong>
                    <p>
                        Da tales doses numero 20 — give 20 such doses.
                    </p>
                </div>

                <div class="example-item">
                    <strong>S. — Signa</strong>
                    <p>
                        Means “Label”. It introduces instructions for the patient.
                    </p>
                </div>

                <div class="example-item">
                    <strong>bis in die</strong>
                    <p>
                        Means “twice a day”.
                    </p>
                </div>

            </div>

        </div>

    `;
}
function showPrescriptionParts() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showPrescriptions()">
                ← BACK
            </button>

            <h1>🧾 PARTS OF A PRESCRIPTION</h1>

            <div class="lesson-intro">
                <p>
                    A prescription consists of several important parts.
                    Click on each part to learn what it means.
                </p>
            </div>

            <div class="lesson-card">

                <h2>📋 Prescription structure</h2>

                <div class="interactive-prescription">

                    <button class="prescription-part"
                            onclick="showPrescriptionPart('header')">
                        <strong>PRESCRIPTIO</strong>
                    </button>

                    <button class="prescription-part"
                            onclick="showPrescriptionPart('recipe')">
                        <strong>Rp.:</strong> Paracetamoli 0,5
                    </button>

                    <button class="prescription-part"
                            onclick="showPrescriptionPart('quantity')">
                        <strong>D.t.d. N. 20</strong>
                    </button>

                    <button class="prescription-part"
                            onclick="showPrescriptionPart('signa')">
                        <strong>S.</strong> 1 tabulettam bis in die.
                    </button>

                </div>

                <div id="prescription-info" class="definition-box">
                    👆 Click on a part of the prescription above.
                </div>

            </div>

            <div class="lesson-card important">

                <h2>💡 Why are these parts important?</h2>

                <p>
                    Each part provides specific information needed to prepare,
                    dispense and correctly use the medicine.
                </p>

                <p>
                    Understanding prescription terminology is an important
                    skill for pharmacists and other healthcare professionals.
                </p>

            </div>

        </div>

    `;
}
function showPrescriptionPart(type) {

    const info = document.getElementById("prescription-info");

    if (type === "header") {

        info.innerHTML = `
            <strong>PRESCRIPTIO</strong>
            <p>
                This is the heading of the prescription.
                It identifies the document as a prescription.
            </p>
        `;

    }

    else if (type === "recipe") {

        info.innerHTML = `
            <strong>Rp. — Recipe</strong>
            <p>
                “Recipe” means <b>“Take”</b>.
                It traditionally begins the main part of a prescription.
            </p>
            <p>
                <b>Paracetamoli 0,5</b> indicates the medicine
                and its strength: 0.5 g.
            </p>
        `;

    }

    else if (type === "quantity") {

        info.innerHTML = `
            <strong>D.t.d. N. 20</strong>
            <p>
                <b>Da tales doses numero 20</b>
                means “Give such doses in the number of 20”.
            </p>
            <p>
                It indicates that 20 doses should be dispensed.
            </p>
        `;

    }

    else if (type === "signa") {

        info.innerHTML = `
            <strong>S. — Signa</strong>
            <p>
                “Signa” means <b>“Label”</b>.
                It introduces the instructions for the patient.
            </p>
            <p>
                <b>bis in die</b> means “twice a day”.
            </p>
        `;

    }

}
function showPrescriptionLatin() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showPrescriptions()">
                ← BACK
            </button>

            <h1>⚕️ LATIN IN PRESCRIPTIONS</h1>

            <div class="lesson-intro">
                <p>
                    Latin terminology is traditionally used in prescriptions.
                    Learn the most common terms and abbreviations.
                </p>
            </div>

            <div class="lesson-card">

                <h2>📚 Common Latin terms</h2>

                <div class="latin-table">

                    <div class="latin-row latin-head">
                        <div>LATIN</div>
                        <div>ENGLISH</div>
                        <div>MEANING</div>
                    </div>

                    <div class="latin-row">
                        <div><strong>Recipe (Rp.)</strong></div>
                        <div>Take</div>
                        <div>Beginning of the prescription</div>
                    </div>

                    <div class="latin-row">
                        <div><strong>Da</strong></div>
                        <div>Give</div>
                        <div>Instruction to dispense</div>
                    </div>

                    <div class="latin-row">
                        <div><strong>Signa (S.)</strong></div>
                        <div>Label</div>
                        <div>Instructions for the patient</div>
                    </div>

                    <div class="latin-row">
                        <div><strong>numero (N.)</strong></div>
                        <div>Number</div>
                        <div>Indicates the quantity</div>
                    </div>

                    <div class="latin-row">
                        <div><strong>bis in die</strong></div>
                        <div>Twice a day</div>
                        <div>Frequency of administration</div>
                    </div>

                </div>

            </div>

            <div class="lesson-card important">

                <h2>💊 Example</h2>

                <div class="latin-example">

                    <p>
                        <strong>Rp.:</strong> Paracetamoli 0,5
                    </p>

                    <p>
                        <strong>D.t.d. N. 20</strong>
                    </p>

                    <p>
                        <strong>S.</strong> 1 tabulettam bis in die.
                    </p>

                </div>

                <div class="definition-box">

                    <strong>What does it mean?</strong>

                    <p>
                        Take paracetamol 0.5 g, give 20 such doses,
                        and label: one tablet twice a day.
                    </p>

                </div>

            </div>

            <div class="lesson-card">

                <h2>🧠 Remember</h2>

                <p>
                    Latin abbreviations make prescriptions concise
                    and help healthcare professionals communicate
                    using standardized terminology.
                </p>

            </div>

        </div>

    `;
}
function showStorageOfMedicines() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showMainMenu()">
                ← BACK
            </button>

            <h1>🧊 STORAGE OF MEDICINES</h1>

            <div class="lesson-intro">
                <p>
                    Medicines must be stored under appropriate conditions
                    to preserve their quality, safety and effectiveness.
                </p>
            </div>

            <div class="menu-grid">

                <div class="menu-card" onclick="showStorageTemperature()">
                    <div class="menu-icon">🌡️</div>
                    <h2>TEMPERATURE</h2>
                    <p>
                        Learn why temperature is important
                        when storing medicines.
                    </p>
                </div>

                <div class="menu-card" onclick="showStorageLight()">
                    <div class="menu-icon">☀️</div>
                    <h2>PROTECTION FROM LIGHT</h2>
                    <p>
                        Learn why some medicines must be
                        protected from light.
                    </p>
                </div>

                <div class="menu-card" onclick="showStorageMoisture()">
                    <div class="menu-icon">💧</div>
                    <h2>PROTECTION FROM MOISTURE</h2>
                    <p>
                        Learn why humidity can affect
                        the quality of medicines.
                    </p>
                </div>

                <div class="menu-card" onclick="showStorageControlled()">
                    <div class="menu-icon">🔐</div>
                    <h2>CONTROLLED MEDICINES</h2>
                    <p>
                        Learn about restricted access
                        and special storage requirements.
                    </p>
                </div>

                <div class="menu-card" onclick="showStorageMonitoring()">
                    <div class="menu-icon">🗂️</div>
                    <h2>STORAGE & MONITORING</h2>
                    <p>
                        Learn how pharmacies organize
                        and monitor medicine storage.
                    </p>
                </div>
<div class="menu-card" onclick="showHomeMedicineStorage()">
    <div class="menu-icon">🏠</div>
    <h2>HOW TO STORE MEDICINES AT HOME</h2>
    <p>
        Learn how to safely organise and store
        medicines at home.
    </p>
</div>
            </div>

        </div>

    `;
}
function showStorageTemperature() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showStorageOfMedicines()">
                ← BACK
            </button>

            <h1>🌡️ TEMPERATURE</h1>

            <div class="lesson-intro">
                <p>
                    Temperature is one of the most important factors
                    in the proper storage of medicines.
                </p>
            </div>

            <div class="lesson-card">

                <h2>🌡️ Why does temperature matter?</h2>

                <p>
                    Medicines are chemical substances, and their quality can
                    change when they are exposed to unsuitable temperatures.
                    Excessive heat may accelerate chemical reactions and cause
                    some medicines to lose their stability or effectiveness.
                    Very low temperatures can also damage certain preparations.
                </p>

                <p>
                    For this reason, medicines should always be stored according
                    to the conditions specified by the manufacturer. Some
                    medicines can be kept at room temperature, while others
                    require controlled refrigeration.
                </p>

            </div>
            <div class="storage-image">
    <img src="images/medicine-fridge.jpg" alt="Medicine refrigerator">
</div>

            <div class="lesson-card important">

                <h2>🏠 Room temperature</h2>

                <p>
                    Many medicines are designed to be stored at room temperature.
                    They should be kept in a dry, clean place away from direct
                    sunlight and sources of heat such as radiators or heaters.
                    The exact temperature range should always be checked on
                    the medicine's label or in its instructions.
                </p>

            </div>

            <div class="lesson-card">

                <h2>❄️ Refrigerated medicines</h2>

                <p>
                    Some medicines require refrigeration because they can become
                    unstable at higher temperatures. A common refrigerated
                    storage range for medicines that require it is
                    <strong>2°C to 8°C</strong>.
                </p>

                <p>
                    These medicines should be kept in an appropriate medical
                    refrigerator and should not be frozen unless the manufacturer
                    specifically states that freezing is allowed.
                </p>

            </div>

            <div class="lesson-card">

                <h2>⚠️ Important</h2>

                <p>
                    The storage temperature is not the same for every medicine.
                    Always follow the manufacturer's instructions on the label
                    or package insert.
                </p>

            </div>

        </div>

    `;
}
function showStorageLight() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showStorageOfMedicines()">
                ← BACK
            </button>

            <h1>☀️ PROTECTION FROM LIGHT</h1>

            <div class="lesson-intro">
                <p>
                    Some medicines are sensitive to light and must be protected
                    from direct sunlight and strong artificial light.
                </p>
            </div>
<div class="storage-image">
    <img src="images/storage-light.jpg" alt="Medicines protected from light">
</div>
            <div class="lesson-card">

                <h2>☀️ Why does light matter?</h2>

                <p>
                    Light can affect the stability of certain medicines.
                    Prolonged exposure to light may cause chemical changes
                    in some substances and reduce their quality or effectiveness.
                </p>

                <p>
                    That is why medicines that are sensitive to light should
                    be stored in places where they are protected from direct
                    sunlight and other strong sources of light.
                </p>

            </div>

            <div class="lesson-card important">

                <h2>🌑 Dark storage</h2>

                <p>
                    Some medicines are stored in dark cabinets, drawers or
                    other protected areas. Special containers or dark-coloured
                    packaging may also be used to reduce exposure to light.
                </p>

                <p>
                    The exact storage conditions depend on the medicine and
                    are specified by the manufacturer.
                </p>

            </div>

            <div class="lesson-card">

                <h2>🪟 Avoid direct sunlight</h2>

                <p>
                    Medicines should not be left on windowsills or in other
                    places where they can be exposed to direct sunlight.
                    Sunlight can also heat the medicine, creating an additional
                    storage problem.
                </p>

            </div>

            <div class="lesson-card">

                <h2>⚠️ Important</h2>

                <p>
                    Not every medicine requires protection from light.
                    Always check the label or package insert for the specific
                    storage requirements of the medicine.
                </p>

            </div>

        </div>

    `;
}
function showStorageMoisture() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showStorageOfMedicines()">
                ← BACK
            </button>

            <h1>💧 PROTECTION FROM MOISTURE</h1>

            <div class="lesson-intro">
                <p>
                    Moisture can affect the quality and stability of some
                    medicines, so proper humidity control is an important
                    part of pharmaceutical storage.
                </p>
            </div>
<div class="storage-image">
    <img src="images/storage-moisture.jpg" alt="Proper medicine storage in a dry area">
</div>
            <div class="lesson-card">

                <h2>💧 Why does moisture matter?</h2>

                <p>
                    Excessive humidity can cause some medicines to absorb
                    water from the environment. This may change their
                    physical properties and, in some cases, affect their
                    stability and effectiveness.
                </p>

                <p>
                    For this reason, medicines that are sensitive to moisture
                    should be kept in dry storage conditions according to
                    the manufacturer's instructions.
                </p>

            </div>

            <div class="lesson-card important">

                <h2>🏥 Dry storage areas</h2>

                <p>
                    Pharmacies should keep medicines in clean and dry areas
                    and protect them from unnecessary exposure to humidity.
                    Medicines should not be stored in places where water,
                    steam or condensation can easily reach them.
                </p>

            </div>

            <div class="lesson-card">

                <h2>🚿 Where should medicines NOT be stored?</h2>

                <p>
                    Medicines should not normally be kept in areas with
                    high humidity, such as near sinks, showers or other
                    sources of steam and water.
                </p>

                <p>
                    A cool place is not necessarily a suitable place if it
                    is also very humid.
                </p>

            </div>

            <div class="lesson-card">

                <h2>⚠️ Important</h2>

                <p>
                    Different medicines have different storage requirements.
                    Always follow the conditions stated on the medicine's
                    label or in the package insert.
                </p>

            </div>

        </div>

    `;
}
function showStorageControlled() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showStorageOfMedicines()">
                ← BACK
            </button>

            <h1>🔐 CONTROLLED MEDICINES</h1>

            <div class="lesson-intro">
                <p>
                    Some medicines require special storage conditions because
                    their use and distribution are strictly controlled.
                </p>
            </div>
<div class="storage-image">
    <img src="images/storage-controlled.jpg" alt="Secure storage for controlled medicines">
</div>
            <div class="lesson-card">

                <h2>🔐 Restricted access</h2>

                <p>
                    Controlled medicines should not be freely accessible to
                    everyone in a pharmacy. Access is limited to authorised
                    personnel who are responsible for handling these medicines.
                </p>

                <p>
                    This helps prevent unauthorised access, loss, theft and
                    improper use.
                </p>

            </div>

            <div class="lesson-card important">

                <h2>🔒 Locked storage</h2>

                <p>
                    Medicines that require controlled storage are kept in
                    secure areas, cabinets or safes that can be locked.
                    The exact requirements depend on the medicine and the
                    regulations that apply in the country.
                </p>

                <p>
                    The key or access to the storage area must be controlled
                    so that unauthorised people cannot reach the medicines.
                </p>

            </div>

            <div class="lesson-card">

                <h2>📋 Special accounting</h2>

                <p>
                    Controlled medicines may require special records of their
                    receipt, storage and dispensing. The amount received and
                    the amount dispensed can be recorded so that the movement
                    of the medicine can be monitored.
                </p>

                <p>
                    Accurate records help pharmacy staff identify discrepancies
                    and maintain safe control over these medicines.
                </p>

            </div>

            <div class="lesson-card">

                <h2>⚠️ Important</h2>

                <p>
                    Storage requirements for controlled medicines can differ
                    depending on national legislation and the type of medicine.
                    Pharmacy staff must follow the current legal requirements
                    and the manufacturer's storage instructions.
                </p>

            </div>

        </div>

    `;
}
function showStorageMonitoring() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showStorageOfMedicines()">
                ← BACK
            </button>

            <h1>🗂️ STORAGE & MONITORING</h1>

            <div class="lesson-intro">
                <p>
                    Proper medicine storage is not only about choosing the
                    right place. Pharmacy staff must also regularly monitor
                    storage conditions and keep the medicines organised.
                </p>
            </div>
<div class="storage-image">
    <img src="images/storage-monitoring.jpg" alt="Pharmacy medicine storage and monitoring">
</div>
            <div class="lesson-card">

                <h2>🌡️ Monitoring conditions</h2>

                <p>
                    Temperature and other storage conditions should be
                    monitored regularly, especially in areas where medicines
                    require specific conditions.
                </p>

                <p>
                    Refrigerators used for medicines should be checked to
                    make sure that the required temperature is maintained.
                    Any problems should be noticed and addressed promptly.
                </p>

            </div>

            <div class="lesson-card important">

                <h2>📦 Keeping medicines organised</h2>

                <p>
                    Medicines should be arranged in an orderly way so that
                    pharmacy staff can easily find the required product and
                    check its storage conditions.
                </p>

                <p>
                    Medicines should not be placed directly on the floor or
                    in areas where they can be exposed to heat, moisture,
                    sunlight or contamination.
                </p>

            </div>

            <div class="lesson-card">

                <h2>📅 Checking expiry dates</h2>

                <p>
                    Pharmacy staff regularly check expiry dates and the
                    condition of medicines. Products that have expired or
                    have been damaged should not be dispensed to patients.
                </p>

                <p>
                    Organised storage also makes it easier to identify
                    medicines that need to be used or removed first.
                </p>

            </div>

            <div class="lesson-card">

                <h2>👀 Regular inspection</h2>

                <p>
                    Storage areas should be kept clean and regularly
                    inspected. Staff may check for damaged packages,
                    incorrect storage conditions, signs of moisture and
                    other problems that could affect medicine quality.
                </p>

            </div>

            <div class="lesson-card">

                <h2>💡 Remember</h2>

                <p>
                    Good pharmaceutical storage means more than simply
                    putting medicines on a shelf. Temperature, light,
                    moisture, security, cleanliness and expiry dates all
                    need to be considered.
                </p>

            </div>

        </div>

    `;
}
function showHomeMedicineStorage() {

    mainMenu.innerHTML = `

        <div class="lesson-page">

            <button class="back-btn" onclick="showStorageOfMedicines()">
                ← BACK
            </button>

            <h1>🏠 HOW TO STORE MEDICINES AT HOME</h1>

            <div class="lesson-intro">
                <p>
                    Proper medicine storage is important not only in pharmacies
                    and hospitals, but also at home.
                </p>
            </div>

            <div class="lesson-card">

                <h2>🏠 Choose the right place</h2>

                <p>
                    Medicines should usually be kept in a cool, dry and clean
                    place, away from direct sunlight and sources of heat.
                    Always follow the storage instructions provided with
                    the medicine.
                </p>

            </div>

            <div class="lesson-card important">

                <h2>🚫 Avoid unsuitable places</h2>

                <p>
                    The bathroom is usually not a good place for medicines
                    because humidity and temperature changes can affect
                    some medicines.
                </p>

                <p>
                    Medicines should also not be left near radiators,
                    heaters or in direct sunlight.
                </p>

            </div>

            <div class="lesson-card">

                <h2>👶 Keep medicines safe</h2>

                <p>
                    Medicines should be stored where children cannot reach
                    them. This is especially important for medicines that
                    could cause serious harm if taken accidentally.
                </p>

            </div>

            <div class="lesson-card">

                <h2>📦 Follow the instructions</h2>

                <p>
                    Different medicines can have different storage
                    requirements. Some may need refrigeration, while others
                    should be kept at room temperature.
                </p>

                <p>
                    Always check the label or package insert before deciding
                    where to store a medicine.
                </p>

            </div>

            <div class="storage-video">

                <h2>🎥 WATCH THE VIDEO</h2>

                <div class="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/sJhqLO-lCx8"
                        title="How to Store Your Meds"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>

        </div>

    `;
}
function showPharmacyChallenge() {

    mainMenu.innerHTML = `

        <div class="challenge-page">

            <button class="back-btn" onclick="showMainMenu()">
                ← BACK
            </button>

            <h1>💊 PHARMACY CHALLENGE</h1>

            <div class="challenge-stats">

                <div class="stat-box">
                    ❤️ <span id="hp-value">3</span> HP
                </div>

                <div class="stat-box">
                    ⭐ <span id="xp-value">0</span> XP
                </div>

                <div class="stat-box">
                    🏆 <span id="achievement-value">0</span> ACHIEVEMENTS
                </div>

            </div>

            <div class="challenge-card">

                <div class="challenge-number">
                    CHALLENGE 1
                </div>

                <h2>💊 IDENTIFY THE MEDICINE</h2>

                <p>
                    A patient brings you this medicine.
                    Can you identify its dosage form?
                </p>

                <div class="medicine-display">

                    <div class="medicine-box">

                        <div class="medicine-name">
                            PARACETAMOL
                        </div>

                        <div class="medicine-strength">
                            500 mg
                        </div>

                        <div class="medicine-form">
                            TABLETS
                        </div>

                        <div class="medicine-quantity">
                            20 tablets
                        </div>

                    </div>

                </div>

                <p class="question">
                    What dosage form is this medicine?
                </p>

                <div class="answer-buttons">

                    <button onclick="checkMedicineAnswer('tablet')">
                        💊 TABLET
                    </button>

                    <button onclick="checkMedicineAnswer('capsule')">
                        💊 CAPSULE
                    </button>

                    <button onclick="checkMedicineAnswer('powder')">
                        🧂 POWDER
                    </button>

                </div>

                <div id="challenge-feedback"></div>

            </div>

        </div>

    `;
}
function showPharmacyMenu() {
    document.getElementById("game-content").innerHTML = `
        <div class="lesson-page">

            <h1>💊 PHARMACY</h1>

            <p class="lesson-intro">
                Choose a topic to continue learning about medicines and pharmacy.
            </p>

            <div class="pharmacy-menu">

                <button class="section-button" onclick="showPharmaceuticalForms()">
                    💊
                    <span>PHARMACEUTICAL FORMS</span>
                </button>

                <button class="section-button" onclick="showPackaging()">
                    📦
                    <span>PACKAGING & LABELLING</span>
                </button>

                <button class="section-button" onclick="showPrescriptions()">
                    📋
                    <span>PRESCRIPTIONS</span>
                </button>

                <button class="section-button" onclick="showStorageOfMedicines()">
                    🗄️
                    <span>STORAGE OF MEDICINES</span>
                </button>

                <button class="section-button challenge"
                        onclick="showPharmacyChallenge()">
                    🧠
                    <span>PHARMACY CHALLENGE</span>
                </button>

            </div>

        </div>
    `;
}
function checkMedicineAnswer(answer) {

    const feedback = document.getElementById("challenge-feedback");
    const xpValue = document.getElementById("xp-value");
    const hpValue = document.getElementById("hp-value");

    if (answer === "tablet") {

        xpValue.textContent = "20";

        feedback.innerHTML = `
            <div class="correct-answer">

                <strong>✅ CORRECT!</strong>

                <p>
                    This medicine is a tablet.
                    You earned <strong>+20 XP</strong>!
                </p>

                <button class="next-button" onclick="startChallenge2()">
                    NEXT CHALLENGE →
                </button>

            </div>
        `;

    } else {

        let hp = Number(hpValue.textContent);

        hp--;

        hpValue.textContent = hp;

        if (hp > 0) {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>❌ NOT QUITE!</strong>

                    <p>
                        Look carefully at the dosage form.
                        You lost <strong>1 HP</strong>.
                    </p>

                    <p>
                        ❤️ HP remaining: <strong>${hp}</strong>
                    </p>

                </div>
            `;

        } else {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>💀 GAME OVER</strong>

                    <p>
                        You ran out of HP!
                    </p>

                    <button class="next-button" onclick="showPharmacyChallenge()">
                        🔄 TRY AGAIN
                    </button>

                </div>
            `;

        }

    }

}
function startChallenge2() {

    mainMenu.innerHTML = `

        <div class="challenge-page">

            <button class="back-btn" onclick="showMainMenu()">
                ← BACK
            </button>

            <h1>💊 PHARMACY CHALLENGE</h1>

            <div class="challenge-stats">

                <div class="stat-box">
                    ❤️ <span id="hp-value">3</span> HP
                </div>

                <div class="stat-box">
                    ⭐ <span id="xp-value">20</span> XP
                </div>

                <div class="stat-box">
                    🏆 <span id="achievement-value">0</span> ACHIEVEMENTS
                </div>

            </div>

            <div class="challenge-card">

                <div class="challenge-number">
                    CHALLENGE 2
                </div>

                <h2>🔎 LABEL DETECTIVE</h2>

                <p>
                    A pharmacist must check the medicine label
                    before dispensing it.
                </p>

                <div class="medicine-display">

                    <div class="medicine-box">

                        <div class="medicine-name">
                            PARACETAMOL
                        </div>

                        <div class="medicine-strength">
                            500 mg
                        </div>

                        <div class="medicine-form">
                            TABLETS
                        </div>

                        <div class="medicine-quantity">
                            20 tablets
                        </div>

                        <hr>

                        <p>
                            <strong>EXP:</strong> 06/2029
                        </p>

                        <p>
                            <strong>BATCH No.:</strong> A4721
                        </p>

                        <p>
                            <strong>STORE:</strong> BELOW 25°C
                        </p>

                    </div>

                </div>

                <p class="question">
                    🔎 What is the strength of this medicine?
                </p>

                <div class="answer-buttons">

                    <button onclick="checkPackagingAnswer('500mg')">
                        💊 500 mg
                    </button>

                    <button onclick="checkPackagingAnswer('20')">
                        📦 20 tablets
                    </button>

                    <button onclick="checkPackagingAnswer('06/2029')">
                        📅 06/2029
                    </button>

                </div>

                <div id="challenge-feedback"></div>

            </div>

        </div>

    `;
}
function checkPackagingAnswer(answer) {

    const feedback = document.getElementById("challenge-feedback");
    const xpValue = document.getElementById("xp-value");
    const hpValue = document.getElementById("hp-value");

    if (answer === "500mg") {

        xpValue.textContent = "40";

        feedback.innerHTML = `
            <div class="correct-answer">

                <strong>✅ CORRECT!</strong>

                <p>
                    500 mg is the strength of the medicine.
                </p>

                <p>
                    You earned <strong>+20 XP</strong>!
                </p>

                <button class="next-button" onclick="startChallenge3()">
                    NEXT CHALLENGE →
                </button>

            </div>
        `;

    } else {

        let hp = Number(hpValue.textContent);

        hp--;

        hpValue.textContent = hp;

        if (hp > 0) {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>❌ NOT QUITE!</strong>

                    <p>
                        That information is not the medicine strength.
                    </p>

                    <p>
                        You lost <strong>1 HP</strong>.
                    </p>

                    <p>
                        ❤️ HP remaining:
                        <strong>${hp}</strong>
                    </p>

                </div>
            `;

        } else {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>💀 GAME OVER</strong>

                    <p>
                        You ran out of HP!
                    </p>

                    <button class="next-button" onclick="showPharmacyChallenge()">
                        🔄 TRY AGAIN
                    </button>

                </div>
            `;

        }

    }

}
function startChallenge3() {

    mainMenu.innerHTML = `

        <div class="challenge-page">

            <button class="back-btn" onclick="showMainMenu()">
                ← BACK
            </button>

            <h1>💊 PHARMACY CHALLENGE</h1>

            <div class="challenge-stats">

                <div class="stat-box">
                    ❤️ <span id="hp-value">3</span> HP
                </div>

                <div class="stat-box">
                    ⭐ <span id="xp-value">40</span> XP
                </div>

                <div class="stat-box">
                    🏆 <span id="achievement-value">0</span> ACHIEVEMENTS
                </div>

            </div>

            <div class="challenge-card">

                <div class="challenge-number">
                    CHALLENGE 3
                </div>

                <h2>📜 PRESCRIPTION MATCH</h2>

                <p>
                    Match each part of the prescription
                    with its correct meaning.
                </p>

                <div class="prescription-box">

                    <div class="prescription-title">
                        PRESCRIPTIO
                    </div>

                    <p>
                        <strong>Rp.</strong>
                    </p>

                    <p>
                        Paracetamoli 0,5
                    </p>

                    <p>
                        D.t.d. N. 20
                    </p>

                    <p>
                        S. 1 tabulettam bis in die.
                    </p>

                </div>

                <p class="question">
                    🔗 Select an item on the left,
                    then select its meaning on the right.
                </p>

                <div class="matching-game">

                    <div class="matching-column">

                        <h3>📜 PRESCRIPTION</h3>

                        <button class="match-item left-item"
                            onclick="selectPrescriptionItem('rp', this)">
                            Rp.
                        </button>

                        <button class="match-item left-item"
                            onclick="selectPrescriptionItem('dose', this)">
                            0,5
                        </button>

                        <button class="match-item left-item"
                            onclick="selectPrescriptionItem('quantity', this)">
                            D.t.d. N. 20
                        </button>

                        <button class="match-item left-item"
                            onclick="selectPrescriptionItem('label', this)">
                            S.
                        </button>

                        <button class="match-item left-item"
                            onclick="selectPrescriptionItem('frequency', this)">
                            bis in die
                        </button>

                    </div>


                    <div class="matching-column">

                        <h3>💡 MEANING</h3>

                        <button class="match-item right-item"
                            onclick="selectPrescriptionMeaning('frequency', this)">
                            Twice a day
                        </button>

                        <button class="match-item right-item"
                            onclick="selectPrescriptionMeaning('quantity', this)">
                            Give 20 such doses
                        </button>

                        <button class="match-item right-item"
                            onclick="selectPrescriptionMeaning('dose', this)">
                            0.5 g of the medicine
                        </button>

                        <button class="match-item right-item"
                            onclick="selectPrescriptionMeaning('rp', this)">
                            Take
                        </button>

                        <button class="match-item right-item"
                            onclick="selectPrescriptionMeaning('label', this)">
                            Label / instructions
                        </button>

                    </div>

                </div>

                <div id="challenge-feedback"></div>

            </div>

        </div>

    `;

    prescriptionSelectedItem = null;
    prescriptionMatches = 0;

}
let prescriptionSelectedItem = null;
let prescriptionMatches = 0;


function selectPrescriptionItem(type, button) {

    if (button.classList.contains("matched")) {
        return;
    }

    document.querySelectorAll(".left-item").forEach(function(item) {
        item.classList.remove("selected");
    });

    button.classList.add("selected");

    prescriptionSelectedItem = type;

}


function selectPrescriptionMeaning(type, button) {

    if (!prescriptionSelectedItem) {
        return;
    }

    if (button.classList.contains("matched")) {
        return;
    }

    const feedback = document.getElementById("challenge-feedback");

    const hpValue = document.getElementById("hp-value");
    const xpValue = document.getElementById("xp-value");

    if (prescriptionSelectedItem === type) {

        button.classList.add("matched");

        document.querySelectorAll(".left-item").forEach(function(item) {

            if (item.classList.contains("selected")) {

                item.classList.remove("selected");
                item.classList.add("matched");

            }

        });

        prescriptionMatches++;

        let xp = Number(xpValue.textContent);
        xp += 10;

        xpValue.textContent = xp;

        feedback.innerHTML = `
            <div class="correct-answer">

                <strong>✅ CORRECT MATCH!</strong>

                <p>
                    Great! You found the correct pair.
                </p>

                <p>
                    ⭐ <strong>+10 XP</strong>
                </p>

            </div>
        `;

        prescriptionSelectedItem = null;


        if (prescriptionMatches === 5) {

            xp += 20;

            xpValue.textContent = xp;

            feedback.innerHTML = `
                <div class="correct-answer">

                    <strong>🏆 PRESCRIPTION COMPLETE!</strong>

                    <p>
                        You matched all five prescription elements correctly!
                    </p>

                    <p>
                        ⭐ Bonus: <strong>+20 XP</strong>
                    </p>

                    <p>
                        📜 Achievement unlocked:
                        <strong>PRESCRIPTION READER</strong>
                    </p>

                    <button class="next-button"
                        onclick="startChallenge4()">
                        NEXT CHALLENGE →
                    </button>

                </div>
            `;

        }

    } else {

        let hp = Number(hpValue.textContent);

        hp--;

        hpValue.textContent = hp;

        prescriptionSelectedItem = null;

        document.querySelectorAll(".left-item").forEach(function(item) {
            item.classList.remove("selected");
        });


        if (hp > 0) {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>❌ WRONG MATCH!</strong>

                    <p>
                        That meaning does not belong to this
                        prescription element.
                    </p>

                    <p>
                        ❤️ HP remaining:
                        <strong>${hp}</strong>
                    </p>

                </div>
            `;

        } else {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>💀 GAME OVER</strong>

                    <p>
                        You ran out of HP!
                    </p>

                    <button class="next-button"
                        onclick="showPharmacyChallenge()">
                        🔄 TRY AGAIN
                    </button>

                </div>
            `;

        }

    }

}
function startChallenge4() {

    mainMenu.innerHTML = `

        <div class="challenge-page">

            <button class="back-btn" onclick="showMainMenu()">
                ← BACK
            </button>

            <h1>💊 PHARMACY CHALLENGE</h1>

            <div class="challenge-stats">

                <div class="stat-box">
                    ❤️ <span id="hp-value">3</span> HP
                </div>

                <div class="stat-box">
                    ⭐ <span id="xp-value">110</span> XP
                </div>

                <div class="stat-box">
                    🏆 <span id="achievement-value">0</span> ACHIEVEMENTS
                </div>

            </div>

            <div class="challenge-card">

                <div class="challenge-number">
                    CHALLENGE 4
                </div>

                <h2>🌡️ WHERE DOES IT BELONG?</h2>

                <p>
                    A medicine must be stored at
                    <strong>2–8°C</strong>.
                </p>

                <p class="question">
                    Where should you store it?
                </p>

                <div class="storage-options">

                    <button class="storage-option"
                        onclick="checkStorageAnswer('refrigerator')">

                        <div class="storage-icon">
                            🧊
                        </div>

                        <strong>REFRIGERATOR</strong>

                

                    </button>


                    <button class="storage-option"
                        onclick="checkStorageAnswer('window')">

                        <div class="storage-icon">
                            ☀️
                        </div>

                        <strong>WINDOWSILL</strong>

                        

                    </button>


                    <button class="storage-option"
                        onclick="checkStorageAnswer('bathroom')">

                        <div class="storage-icon">
                            🚿
                        </div>

                        <strong>BATHROOM</strong>

                        

                    </button>


                    <button class="storage-option"
                        onclick="checkStorageAnswer('cabinet')">

                        <div class="storage-icon">
                            🗄️
                        </div>

                        <strong>ROOM CABINET</strong>

                        
                    </button>

                </div>

                <div id="challenge-feedback"></div>

            </div>

        </div>

    `;
}
function checkStorageAnswer(answer) {

    const feedback = document.getElementById("challenge-feedback");
    const hpValue = document.getElementById("hp-value");
    const xpValue = document.getElementById("xp-value");

    if (answer === "refrigerator") {

        let xp = Number(xpValue.textContent);
        xp += 10;

        xpValue.textContent = xp;

        feedback.innerHTML = `
            <div class="correct-answer">

                <strong>✅ CORRECT!</strong>

                <p>
                    Medicines that require refrigeration
                    are commonly stored at <strong>2–8°C</strong>.
                </p>

                <p>
                    ⭐ <strong>+10 XP</strong>
                </p>

                <button class="next-button"
                    onclick="startChallenge5()">

                    NEXT CHALLENGE →

                </button>

            </div>
        `;

    } else {

        let hp = Number(hpValue.textContent);

        hp--;

        hpValue.textContent = hp;

        if (hp > 0) {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>❌ WRONG STORAGE!</strong>

                    <p>
                        This medicine requires
                        <strong>2–8°C</strong>.
                    </p>

                    <p>
                        ❤️ HP remaining:
                        <strong>${hp}</strong>
                    </p>

                </div>
            `;

        } else {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>💀 GAME OVER</strong>

                    <p>
                        You ran out of HP!
                    </p>

                    <button class="next-button"
                        onclick="showPharmacyChallenge()">

                        🔄 TRY AGAIN

                    </button>

                </div>
            `;

        }

    }

}
function startChallenge5() {

    mainMenu.innerHTML = `

        <div class="challenge-page">

            <button class="back-btn" onclick="showMainMenu()">
                ← BACK
            </button>

            <h1>💊 PHARMACY CHALLENGE</h1>

            <div class="challenge-stats">

                <div class="stat-box">
                    ❤️ <span id="hp-value">3</span> HP
                </div>

                <div class="stat-box">
                    ⭐ <span id="xp-value">120</span> XP
                </div>

                <div class="stat-box">
                    🏆 <span id="achievement-value">0</span> ACHIEVEMENTS
                </div>

            </div>

            <div class="challenge-card">

                <div class="challenge-number">
                    CHALLENGE 5
                </div>

                <h2>🔎 SPOT THE STORAGE MISTAKE</h2>

                <p>
                    You are checking a patient's home medicine storage.
                </p>

                <p class="question">
                    Which storage situation is unsafe?
                </p>

                <div class="storage-options">

                    <button class="storage-option"
                        onclick="checkHomeStorageAnswer('bathroom')">

                        <div class="storage-icon">
                            🚿
                        </div>

                        <strong>BATHROOM SHELF</strong>

                    </button>


                    <button class="storage-option"
                        onclick="checkHomeStorageAnswer('refrigerator')">

                        <div class="storage-icon">
                            🧊
                        </div>

                        <strong>REFRIGERATOR</strong>

                    </button>


                    <button class="storage-option"
                        onclick="checkHomeStorageAnswer('cabinet')">

                        <div class="storage-icon">
                            🗄️
                        </div>

                        <strong>MEDICINE CABINET</strong>

                    </button>


                    <button class="storage-option"
                        onclick="checkHomeStorageAnswer('box')">

                        <div class="storage-icon">
                            📦
                        </div>

                        <strong>DRY STORAGE BOX</strong>

                    </button>

                </div>

                <div id="challenge-feedback"></div>

            </div>

        </div>

    `;
}
function checkHomeStorageAnswer(answer) {

    const feedback = document.getElementById("challenge-feedback");
    const hpValue = document.getElementById("hp-value");
    const xpValue = document.getElementById("xp-value");

    if (answer === "bathroom") {

        let xp = Number(xpValue.textContent);
        xp += 15;

        xpValue.textContent = xp;

        feedback.innerHTML = `
            <div class="correct-answer">

                <strong>✅ CORRECT!</strong>

                <p>
                    Bathrooms can have high humidity and
                    temperature changes, which may affect
                    some medicines.
                </p>

                <p>
                    ⭐ <strong>+15 XP</strong>
                </p>

                <button class="next-button"
                    onclick="startChallenge6()">

                    NEXT CHALLENGE →

                </button>

            </div>
        `;

    } else {

        let hp = Number(hpValue.textContent);

        hp--;

        hpValue.textContent = hp;

        if (hp > 0) {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>❌ NOT THIS ONE!</strong>

                    <p>
                        Think about humidity and
                        unsuitable storage conditions.
                    </p>

                    <p>
                        ❤️ HP remaining:
                        <strong>${hp}</strong>
                    </p>

                </div>
            `;

        } else {

            feedback.innerHTML = `
                <div class="wrong-answer">

                    <strong>💀 GAME OVER</strong>

                    <p>
                        You ran out of HP!
                    </p>

                    <button class="next-button"
                        onclick="showPharmacyChallenge()">

                        🔄 TRY AGAIN

                    </button>

                </div>
            `;

        }

    }

}
function startChallenge6() {

    const currentHP = document.getElementById("hp-value")?.textContent || "3";
    const currentXP = document.getElementById("xp-value")?.textContent || "0";

    mainMenu.innerHTML = `

        <div class="challenge-page">

            <button class="back-btn" onclick="showMainMenu()">
                ← BACK
            </button>

            <h1>💊 PHARMACY CHALLENGE</h1>

            <div class="challenge-stats">

                <div class="stat-box">
                    ❤️ <span id="hp-value">${currentHP}</span> HP
                </div>

                <div class="stat-box">
                    ⭐ <span id="xp-value">${currentXP}</span> XP
                </div>

                <div class="stat-box">
                    🏆 <span id="achievement-value">0</span> ACHIEVEMENTS
                </div>

            </div>

            <div class="challenge-card">

                <div class="challenge-number">
                    CHALLENGE 6
                </div>

                <h2>📦 PACKAGING DETECTIVE</h2>

                <p>
                    A pharmacist is inspecting this medicine package.
                    Look carefully at the photograph.
                </p>

                <div class="packaging-photo">

                    <img
                        src="images/blister-pack.jpg"
                        alt="Tablets in a blister pack"
                    >

                </div>

                <p class="question">
                    🔎 What type of pharmaceutical packaging is shown?
                </p>

                <p class="challenge-hint">
                    Think about whether the package comes into direct
                    contact with the medicine.
                </p>

                <div class="packaging-options">

                    <button
                        onclick="checkPackagingType('secondary')">

                        📦 SECONDARY PACKAGING

                    </button>

                    <button
                        onclick="checkPackagingType('primary')">

                        💊 PRIMARY PACKAGING

                    </button>

                    <button
                        onclick="checkPackagingType('both')">

                        📦 BOTH PRIMARY AND SECONDARY

                    </button>

                    <button
                        onclick="checkPackagingType('none')">

                        ❌ NOT PHARMACEUTICAL PACKAGING

                    </button>

                </div>

                <div id="challenge-feedback"></div>

            </div>

        </div>

    `;
}
function checkPackagingType(answer) {

    if (answer === "primary") {

        let xp = parseInt(document.getElementById("xp-value").textContent);
        xp += 20;
        document.getElementById("xp-value").textContent = xp;

       document.getElementById("challenge-feedback").innerHTML = `
    <div class="challenge-complete">
        <div class="complete-icon">🎉</div>

        <h2>PHARMACY CHALLENGE COMPLETED!</h2>

        <p>
            Congratulations! You successfully completed
            all pharmacy challenges!
        </p>

        <div class="final-stats">
            ⭐ XP: ${xp}
            <br>
            ❤️ HP: ${document.getElementById("hp-value").textContent}
        </div>

        <p class="complete-message">
            You are ready for your next pharmacy mission! 💊
        </p>

       <button class="next-button" onclick="showMainMenu()">
    🏠 BACK TO MAIN MENU
</button>
    </div>
`;

    } else {

        let hp = parseInt(document.getElementById("hp-value").textContent);
        hp--;

        document.getElementById("hp-value").textContent = hp;

        if (hp <= 0) {

            document.getElementById("challenge-feedback").innerHTML = `
                <div class="wrong-answer game-over">
                    💀 GAME OVER
                    <br><br>
                    You ran out of HP.
                    <br><br>
                    <button class="next-button"
                        onclick="showPharmacyChallenge()">
                        TRY AGAIN
                    </button>
                </div>
            `;

        } else {

            document.getElementById("challenge-feedback").innerHTML = `
                <div class="wrong-answer">
                    ❌ Wrong answer!
                    <br>
                    Try again.
                </div>
            `;
        }
    }
}
