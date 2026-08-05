import projects from "./projects_data.js";

(function mapProjectsToContainer() {
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector("#projectsContainer");

        if (!container) {
            console.error("Could not find #projectsContainer!");
            return;
        }

        container.innerHTML =
            projects.map((project) => {
                const hasVideoURL = project.videoURL !== null && project.videoURL.trim() != "";
                return `
                    <div class="group relative flex flex-col w-full bg-surface-container-low transition-all duration-500 hover:bg-surface-container">
                        <!-- Card Header -->
                        <div class="h-12 flex items-center px-6 justify-between bg-surface-container-highest/30">
                            <span class="font-label text-xs font-bold tracking-[0.2em] text-on-surface uppercase">${project.subtitle}</span>
                            <div class="flex gap-1">
                                <span class="text-[12px] font-label text-on-surface-variant">
                                    ${project.version}
                                </span>
                            </div>
                        </div>
                        <!-- Card Body -->
                        <div class="flex flex-col lg:flex-row min-h-[450px]">
                            <div class="project-media w-full lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">

                            ${
                                hasVideoURL
                                    ? `
                                    <video
                                        class="project-video absolute inset-0 w-full h-full object-cover"
                                        preload="metadata"
                                        controls>
                                        <source src="${project.videoURL}" type="video/mp4">
                                            Your browser does not support video playback.
                                    </video>

                                    <div class="video-overlay absolute inset-0 z-10">
                                        <img
                                            class="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                            alt="Preview of ${project.mainTitle}"
                                            src="${project.imageSrc}">

                                    <div class="absolute inset-0 bg-black/20"></div>
                                    <button
                                        type="button"
                                        class="play-video-button absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-container text-white shadow-lg transition-transform hover:scale-110"
                                        aria-label="Play ${project.mainTitle} demonstration video"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            class="h-10 w-10 translate-x-0.5 fill-current"
                                            aria-hidden="true"
                                        >
                                            <path d="M8 5v14l11-7z"></path>
                                        </svg>
                                    </button>
                                </div>
                                    ` : `
                                    <img
                                        class="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                        alt="Image of ${project.mainTitle}"
                                        src="${project.imageSrc}">
                                    `
                            }

                            <div class="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>

                        </div>
                            <div class="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between gap-8">
                            <div class="flex flex-col gap-6">
                                <h3 class="font-display text-3xl font-bold text-on-surface tracking-tight uppercase">${project.mainTitle}</h3>
                                <div class="text-on-surface-variant font-body leading-relaxed max-w-md">
                                <ul class="list-disc">
                                    ${project.bulletPoints.map((point) => {
                                        return `
                                            <li>${point}</li>
                                        `;
                                    }).join("")}
                                </ul>
                                <span class="italic">${project.sideNote}</span>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tags.map((tag) => {
                                        return `
                                            <span class="px-3 py-1 bg-secondary-container/10 text-secondary text-[10px] font-label tracking-widest uppercase">
                                                ${tag}
                                            </span>
                                        `;
                                    }).join("")}
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-4">
                            <a href="${project.button1Link}" target="_blank">
                                <button class="px-8 py-4 bg-primary-container text-white font-label text-xs uppercase tracking-widest hover:bg-primary-container/80 transition-all">${project.button1Title}</button>
                            </a>
                            <a href="${project.button2Link}" target="_blank" class="${project.button2Title ?? "hidden"}">
                                <button class="px-8 py-4 border border-outline-variant text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-on-surface hover:border-on-surface transition-all">
                                    ${project.button2Title}
                                </button>
                            </a>
                            </div>
                            </div>
                        </div>
                    </div>
                `;
        }).join("");

            container.addEventListener("click", async (event) => {
                const playButton =
                    event.target.closest(".play-video-button");

                if (!playButton) {
                    return;
                }

                const mediaContainer =
                    playButton.closest(".project-media");

                const video =
                    mediaContainer?.querySelector(".project-video");

                const overlay =
                    mediaContainer?.querySelector(".video-overlay");

                if (!video || !overlay) {
                    return;
                }

                const restoreOverlay = () => {
                    video.pause();
                    video.controls = false;
                    overlay.classList.remove("hidden");

                    console.error(
                        "Unable to load or play video:",
                        video.currentSrc || project.videoURL
                    );
                };

                video.addEventListener(
                    "error",
                    restoreOverlay,
                    { once: true }
                );

                overlay.classList.add("hidden");
                video.controls = true;

                try {
                    await video.play();
                } catch (error) {
                    restoreOverlay();
                    console.error("Video playback was rejected:", error);
                }
            });

    });


})();


