const globalTourWarehouse = {
    manali: {
        name: "Manali Holiday Tour",
        route: "CHANDIGARH - MANALI - KASOL - AMRITSAR CIRTCUIT",
        duration: "6 Days 7 Nights",
        grossCost: 18116,
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Departure pick-up from Chandigarh Station.", "Day 2: Hadimba Temple sightseeing.", "Day 3: Solang Valley alpine exploration.", "Day 4: Travel transit to Kasol.", "Day 5: Long drive down to Amritsar.", "Day 6: Golden Temple early morning visit."]
    },
    kashmir: {
        name: "Kashmir Paradisal Tour",
        route: "VAISHNO DEVI - SRINAGAR - SONAMARG - GULMARG - JAMMU",
        duration: "6 Days 7 Nights",
        grossCost: 19410,
        img: "https://images.pexels.com/photos/19102353/pexels-photo-19102353.jpeg?auto=compress&cs=tinysrgb&w=1200",
        days: ["Day 1: Assembly pickup Jammu.", "Day 2: Vaishno Devi pilgrimage trek.", "Day 3: Transit through Jawahar tunnel.", "Day 4: Sonamarg alpine valley tour.", "Day 5: Gulmarg high gondola cable cars.", "Day 6: Local bazaar checkout updates."]
    },
    goldentriangle: {
        name: "Golden Triangle Cultural Heritage Tour",
        route: "DELHI - AGRA - JAIPUR TRACK",
        duration: "5 Days 6 Nights",
        grossCost: 13528,
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Pick up from Delhi landmarks.", "Day 2: Drive to Taj Mahal Agra.", "Day 3: Guided exploration Agra Fort.", "Day 4: Jaipur Pink city palace tracking.", "Day 5: Return drop directly to New Delhi terminal."]
    },
    kerala: {
        name: "Kerala Backwater Paradise Tour",
        route: "KOCHI - MUNNAR - ALLEPPEY - THEKKADY LINE",
        duration: "5 Days 6 Nights",
        grossCost: 16704,
        img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Arrival collection at Kochi port.", "Day 2: Munnar lush tea garden vistas.", "Day 3: Thekkady reserve ecosystem safari.", "Day 4: Premium Alleppey Houseboat stay.", "Day 5: Coastline breakfast, return drops to Kochi."]
    },
    northeast: {
        name: "North East Wonders Tour",
        route: "SHILLONG - GANGTOK - DARJEELING SECTOR",
        duration: "4 Days 5 Nights",
        grossCost: 14998,
        img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Guwahati pickup to Shillong city.", "Day 2: Cherrapunji living root bridges.", "Day 3: Scenic mountain drive to Gangtok.", "Day 4: Clear Kanchenjunga Tiger Hill sunrise."]
    },
    goa: {
        name: "Goa Premium Beach Package",
        route: "NORTH GOA - SOUTH GOA BEACH CIRTCUIT",
        duration: "Flexible Packages Available",
        grossCost: 15000,
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Airport resort layout transfer check-in.", "Day 2: Scuba diving and water sports track.", "Day 3: Spice plantation farms and churches.", "Day 4: Sunset cruise along Mandovi river networks."]
    },
    dubai: {
        name: "Dubai Luxury Getaway",
        route: "DESERT SAFARI - BURJ KHALIFA - DUBAI MALL CIRCLE",
        duration: "5 Days 6 Nights",
        grossCost: 78000,
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Private luxury hotel transfer.", "Day 2: Burj Khalifa observation deck.", "Day 3: Premium desert dune bashing bbq.", "Day 4: Dubai fountain show mall tours.", "Day 5: Aquaventure park global flight transfers."]
    },
    thailand: {
        name: "Thailand Tropical Explorer",
        route: "BANGKOK - PATTAYA - CORAL ISLANDS CIRCUIT",
        duration: "5 Days 6 Nights",
        grossCost: 65000,
        img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Bangkok to Pattaya resort.", "Day 2: Speedboat out to Coral Island.", "Day 3: Safari World open park tour.", "Day 4: Grand Palace historic temples.", "Day 5: Street shopping terminal drop-offs."]
    },
    bali: {
        name: "Bali Tropical Paradise Exotic Tour",
        route: "UBUD TEMPLES - ULUWATU SEA CLIFF RUN",
        duration: "6 Days 7 Nights",
        grossCost: 70500,
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Villa transfer check-in tracking.", "Day 2: Tegallalang rice terrace Ubud forest.", "Day 3: Mount Batur volcano sunrise ascent.", "Day 4: Uluwatu cliff temple fire dance.", "Day 5: Nusa Dua water sports premium lounge."]
    },
    singapore: {
        name: "Singapore Ultra Futuristic City Tour",
        route: "SENTOSA ISLAND - MARINA BAY LANDMARKS",
        duration: "4 Days 5 Nights",
        grossCost: 100000,
        img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Night Safari evening tour tracker.", "Day 2: Universal Studios pass exploration.", "Day 3: Gardens by the Bay dome networks.", "Day 4: Orchard Road duty free shopping runs."]
    },
    europe: {
        name: "Europe Grand Continental Tour",
        route: "PARIS - ROME - AMSTERDAM HERITAGE RUN",
        duration: "8 Days 9 Nights",
        grossCost: 235000,
        img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Cruise down Seine river Paris.", "Day 2: Eiffel tower lift Louvre walk-throughs.", "Day 3: Rail transit to Swiss alpine valleys.", "Day 4: Historic exploration Colosseum Rome.", "Day 5: Windmill heritage villages Amsterdam."]
    },
    maldives: {
        name: "Maldives Luxury Overwater Stay",
        route: "MALE ATOLL SPEEDBOAT TRANSIT LINE",
        duration: "4 Days 5 Nights",
        grossCost: 165000,
        img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Speedboat to water villa resort.", "Day 2: Coral reef diving photography runs.", "Day 3: Sandbank luxury cruise picnics bbq.", "Day 4: Ocean sunset catamaran tracking."]
    },
    chardham: {
        name: "Sacred Uttarakhand Char Dham Yatra",
        route: "YAMUNOTRI - GANGOTRI - KEDARNATH - BADRINATH SHUTTLE",
        duration: "10 Days 11 Nights",
        grossCost: 41176,
        img: "img/CHARDHAM.jpg",
        days: ["Day 1: Haridwar to Barkot camp.", "Day 2: Yamunotri holy darshan prayers.", "Day 3: Uttarkashi Bhagirathi riverbank lines.", "Day 4: Gangotri temple travel adjustments.", "Day 5: Kedarnath Shiva temple foot trek.", "Day 6: Morning Darshan base return tracks.", "Day 7: Drive Joshimath to Badrinath shrine.", "Day 8: Holy dip Tapt Kund return Haridwar."]
    },
    jyotirlinga: {
        name: "Maha Jyotirlinga Pilgrimage Tour",
        route: "12 HOLY SHIVA JYOTIRLINGA REEVES",
        duration: "15 Days 16 Nights",
        grossCost: 76470,
        img: "img/JYOTI.png",
        days: ["Day 1-3: Somnath & Nageshwar Shrines.", "Day 4-6: Mahakaleshwar & Omkareshwar MP.", "Day 7-10: Bhimashankar, Trimbakeshwar MH.", "Day 11-13: Ramanathaswamy Rameshwaram Island.", "Day 14-15: Kashi Vishwanath Varanasi Ganga Aarti."]
    },
    shirdi: {
        name: "Shirdi Sai Baba Devotion Package",
        route: "SHIRDI DARSHAN SYSTEM",
        duration: "2 Days 3 Nights",
        grossCost: 5294,
        img: "img/shirdi.jpg",
        days: ["Day 1: Pune/Nashik express vehicle to Shirdi.", "Day 2: VIP pass Kakad Aarti Samadhi Mandir."]
    },
    southtemple: {
        name: "Grand South Indian Temples Tour",
        route: "MADURAI - RAMESHWARAM - TIRUPATI CIRCUIT",
        duration: "6 Days 7 Nights",
        grossCost: 64705,
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Madurai Meenakshi stone temple structures.", "Day 2: Rameshwaram island coastal spring cleansing.", "Day 3: Foothill guest house Tirupati check-in.", "Day 4: Tirumala Venkateswara VIP entry darshans."]
    },
    goldentemple: {
        name: "Golden Temple & Panj Takht Yatra",
        route: "AMRITSAR - ANANDPUR SAHIB - PATNA CIRCUITS",
        duration: "5 Days 6 Nights",
        grossCost: 21176,
        img: "https://images.unsplash.com/photo-1588598126233-a3b047bf1b65?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Amritsar evening golden temple entry.", "Day 2: Langar volunteering work Jallianwala Bagh.", "Day 3: Takht Sri Kesgarh Sahib Anandpur.", "Day 4: Train to Takht Sri Patna Sahib Bihar."]
    },
    jagannath: {
        name: "Jagannath Puri Holy Dham Tour",
        route: "PURI - KONARK Sun TEMPLE - BHUBANESWAR",
        duration: "3 Days 4 Nights",
        grossCost: 17647,
        img: "https://images.unsplash.com/photo-1601809545447-8cfb6df890b6?auto=format&fit=crop&w=1200&q=80",
        days: ["Day 1: Bhubaneswar drive to Puri coast resort.", "Day 2: Jagannath Puri complex Konark Sun Temple.", "Day 3: Chilika lake dolphin boat ride tracking."]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlAddressVariables = new URLSearchParams(window.location.search);
    const destinationKey = urlAddressVariables.get('dest') || 'manali';
    
    const activePackage = globalTourWarehouse[destinationKey];
    if (!activePackage) {
        alert("Package configuration error. Returning to console.");
        window.location.href = "Service.html";
        return;
    }

    document.getElementById("destTitle").textContent = activePackage.name;
    document.getElementById("destSubtitle").textContent = activePackage.route;
    document.getElementById("logisticsRoute").textContent = activePackage.route;
    document.getElementById("logisticsDuration").textContent = activePackage.duration;
    document.getElementById("heroBanner").style.backgroundImage = `url('${activePackage.img}')`;

    const timelineList = document.getElementById("itineraryTimelineList");
    timelineList.innerHTML = "";
    activePackage.days.forEach(dayText => {
        const itemNode = document.createElement("li");
        itemNode.textContent = dayText;
        timelineList.appendChild(itemNode);
    });

    let finalNetPrice = 0;

    function calculatePricing() {
        const count = parseInt(document.getElementById("txtPeopleCount").value) || 1;
        const grossPrice = activePackage.grossCost * count;
        const discountAmount = Math.round(grossPrice * 0.15);
        finalNetPrice = grossPrice - discountAmount;

        document.getElementById("txtGrossPrice").textContent = `INR ${grossPrice.toLocaleString()}`;
        document.getElementById("txtDiscount").textContent = `- INR ${discountAmount.toLocaleString()}`;
        document.getElementById("txtNetPrice").textContent = `INR ${finalNetPrice.toLocaleString()}`;
    }

    document.getElementById("txtPeopleCount").addEventListener("input", calculatePricing);
    calculatePricing();

    const transactionForm = document.getElementById("tourCheckoutForm");
    transactionForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const token = localStorage.getItem("userToken");
        if (!token || token === "null" || token === "undefined") {
            alert("Checkout Blocked! Please log in or sign up before booking a tour.");
            window.location.href = "login.html";
            return;
        }

        const chosenHub = document.getElementById("ddlPickup").value;
        const chosenDate = document.getElementById("txtJourneyDate").value;
        const finalCount = document.getElementById("txtPeopleCount").value || "1";

        const payload = {
            customerName: localStorage.getItem("userName") || "Guest Customer",
            email: localStorage.getItem("userEmail") || "sarvesh.patil@gmail.com",
            packageName: activePackage.name,
            price: `INR ${finalNetPrice.toLocaleString()}`,
            peopleCount: parseInt(finalCount),
            date: chosenDate,
            status: "Pending"
        };

        try {
            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Booking Request Processed. Awaiting System Verification.");
                window.location.href = "history.html";
            } else {
                alert("Failed to record travel parameters.");
            }
        } catch (err) {
            alert("Core server network link offline.");
        }
    });
});