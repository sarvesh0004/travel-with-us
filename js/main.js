document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector("nav");
    const token = localStorage.getItem("userToken") || localStorage.getItem("token");
    const fullName = localStorage.getItem("userName") || localStorage.getItem("name");

    if (token && token !== "null" && token !== "undefined" && fullName && navElement) {
        const signUpLink = navElement.querySelector('a[href="signup.html"]') || navElement.querySelector('a[href="/signup.html"]');
        if (signUpLink) signUpLink.remove();

        const loginLink = navElement.querySelector('a[href="login.html"]') || navElement.querySelector('a[href="Login.html"]') || navElement.querySelector('a[href="/login.html"]');
        if (loginLink) loginLink.remove();

        const existingWelcome = navElement.querySelector(".welcome-msg");
        const existingHistory = navElement.querySelector(".history-tab-link");
        const existingDivider = navElement.querySelector(".nav-divider");
        const existingLogout = navElement.querySelector(".logout-btn");
        const existingModal = document.querySelector(".logout-modal-overlay");

        if (existingWelcome) existingWelcome.remove();
        if (existingHistory) existingHistory.remove();
        if (existingDivider) existingDivider.remove();
        if (existingLogout) existingLogout.remove();
        if (existingModal) existingModal.remove();

        const firstName = fullName.trim().split(" ")[0];
        const welcomeElement = document.createElement("span");
        welcomeElement.className = "welcome-msg";
        welcomeElement.style.color = "rgba(255, 255, 255, 0.6)";
        welcomeElement.style.fontFamily = '"Montserrat", sans-serif';
        welcomeElement.style.fontSize = "16px";
        welcomeElement.style.marginRight = "20px";
        welcomeElement.style.cursor = "default";
        welcomeElement.innerText = `Hello, ${firstName}`;
        navElement.appendChild(welcomeElement);

        const historyLink = document.createElement("a");
        historyLink.className = "navigate history-tab-link";
        historyLink.href = "history.html";
        historyLink.style.color = "rgb(117, 234, 234)";
        historyLink.style.fontFamily = '"Montserrat", sans-serif';
        historyLink.style.textDecoration = "none";
        historyLink.style.fontSize = "16px";
        historyLink.style.marginRight = "20px";
        historyLink.style.cursor = "pointer";
        historyLink.innerText = "My Bookings";
        navElement.appendChild(historyLink);

        const divider = document.createElement("span");
        divider.className = "nav-divider";
        divider.style.color = "rgba(255, 255, 255, 0.2)";
        divider.style.marginRight = "20px";
        divider.innerText = "|";
        navElement.appendChild(divider);

        const logoutButton = document.createElement("a");
        logoutButton.className = "navigate logout-btn";
        logoutButton.href = "#";
        logoutButton.style.color = "rgb(235, 232, 232)";
        logoutButton.style.fontFamily = '"Montserrat", sans-serif';
        logoutButton.style.textDecoration = "none";
        logoutButton.style.fontSize = "16px";
        logoutButton.style.marginRight = "50px";
        logoutButton.style.cursor = "pointer";
        logoutButton.style.transition = "color 0.3s ease";
        logoutButton.innerText = "Logout";

        logoutButton.addEventListener("mouseenter", () => logoutButton.style.color = "rgb(117, 234, 234)");
        logoutButton.addEventListener("mouseleave", () => logoutButton.style.color = "rgb(235, 232, 232)");
        navElement.appendChild(logoutButton);

        const overlay = document.createElement("div");
        overlay.className = "logout-modal-overlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        overlay.style.backdropFilter = "blur(4px)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
        overlay.style.transition = "opacity 0.3s ease";

        const modalBox = document.createElement("div");
        modalBox.style.backgroundColor = "#1e293b";
        modalBox.style.padding = "30px 40px";
        modalBox.style.borderRadius = "8px";
        modalBox.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.3)";
        modalBox.style.textAlign = "center";
        modalBox.style.fontFamily = '"Montserrat", sans-serif';
        modalBox.style.transform = "scale(0.8)";
        modalBox.style.transition = "transform 0.3s ease";
        modalBox.style.border = "1px solid rgba(255,255,255,0.1)";

        const message = document.createElement("p");
        message.innerText = "Are you sure you want to log out?";
        message.style.color = "#ffffff";
        message.style.fontSize = "18px";
        message.style.margin = "0 0 25px 0";
        message.style.fontWeight = "500";

        const btnContainer = document.createElement("div");
        btnContainer.style.display = "flex";
        btnContainer.style.gap = "15px";
        btnContainer.style.justifyContent = "center";

        const confirmBtn = document.createElement("button");
        confirmBtn.innerText = "Yes, Logout";
        confirmBtn.style.padding = "10px 20px";
        confirmBtn.style.border = "none";
        confirmBtn.style.borderRadius = "5px";
        confirmBtn.style.backgroundColor = "rgb(117, 234, 234)";
        confirmBtn.style.color = "#0f172a";
        confirmBtn.style.fontWeight = "600";
        confirmBtn.style.cursor = "pointer";
        confirmBtn.style.fontSize = "14px";

        const cancelBtn = document.createElement("button");
        cancelBtn.innerText = "Cancel";
        cancelBtn.style.padding = "10px 20px";
        cancelBtn.style.border = "1px solid rgba(255,255,255,0.2)";
        cancelBtn.style.borderRadius = "5px";
        cancelBtn.style.backgroundColor = "transparent";
        cancelBtn.style.color = "#94a3b8";
        cancelBtn.style.fontWeight = "600";
        cancelBtn.style.cursor = "pointer";
        cancelBtn.style.fontSize = "14px";
        cancelBtn.style.transition = "color 0.2s, border 0.2s";

        cancelBtn.addEventListener("mouseenter", () => {
            cancelBtn.style.color = "#ffffff";
            cancelBtn.style.borderColor = "rgba(255,255,255,0.5)";
        });
        cancelBtn.addEventListener("mouseleave", () => {
            cancelBtn.style.color = "#94a3b8";
            cancelBtn.style.borderColor = "rgba(255,255,255,0.2)";
        });

        btnContainer.appendChild(cancelBtn);
        btnContainer.appendChild(confirmBtn);
        modalBox.appendChild(message);
        modalBox.appendChild(btnContainer);
        overlay.appendChild(modalBox);
        document.body.appendChild(overlay);

        logoutButton.addEventListener("click", (e) => {
            e.preventDefault();
            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "auto";
            modalBox.style.transform = "scale(1)";
        });

        const closeModal = () => {
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
            modalBox.style.transform = "scale(0.8)";
        };

        cancelBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeModal();
        });

        confirmBtn.addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "index.html";
        });
    }
});