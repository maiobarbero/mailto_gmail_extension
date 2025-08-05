function interceptMailtoLinks() {
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
        link.addEventListener(
            "click",
            function(e) {
                e.preventDefault();

                const href = link.getAttribute("href");

                const emails = href.match(/^mailto:([^?]+)/)?.[1] || "";

                const params = new URLSearchParams(href.split("?")[1] || "");
                const subject = params.get("subject") || "";
                const body = params.get("body") || "";
                const cc = params.get("cc") || "";
                const bcc = params.get("bcc") || "";

                const gmailURL = `http://mail.google.com/mail/?fs=1&tf=cm&to=${emails}&cc=${cc}&bcc=${bcc}&su=${subject}&body=${body}`;
                window.open(gmailURL, "_blank");
            },
            true,
        );
    });
}

document.addEventListener("DOMContentLoaded", interceptMailtoLinks);
