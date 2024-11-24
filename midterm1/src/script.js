const areaCodes = [
    "+90 212", "+90 216", "+90 312", "+90 232", "+90 252", "+90 372", "+90 424"
];

const areaCodeDropdown = document.getElementById("area-code");
areaCodes.forEach(code => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = code;
    areaCodeDropdown.appendChild(option);
});

const companyApi = "https://run.mocky.io/v3/ad1817b3-e151-4542-9aeb-f658b3ed26bd";
const subjectApi = "https://run.mocky.io/v3/ebefa07c-e250-45ba-956e-8f75b8c9c490";

const companyDropdown = document.getElementById("company");
const subjectDropdown = document.getElementById("subject");

async function populateDropdown(apiUrl, dropdown) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("API error!");
        const data = await response.json();

        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.name;
            dropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Hata: ", error.message);
    }
}

populateDropdown(companyApi, companyDropdown);
populateDropdown(subjectApi, subjectDropdown);

document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form is submitted!");
});

function closeAd(adId) {
    const adElement = document.getElementById(adId);
    if (adElement) {
        adElement.style.display = "none";
    }
}
