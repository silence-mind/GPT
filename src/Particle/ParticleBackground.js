import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const ParticleBackground = () => {
  const Particleinit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <div>
      <Particles
        init={Particleinit}
        options={{
          particles: {
            number: {
              value: 114,
              density: {
                enable: true,
                value_area: 1183.721462448409,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 4,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 4,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.18939543399174544,
              random: true,
              anim: {
                enable: true,
                speed: 0,
                opacity_min: 0.15984015984015984,
                sync: true,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 3126.65351868777,
                rotateY: 2645.6299004281127,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },

          retina_detect: true,
        }}
      />
    </div>
  );
};
export default ParticleBackground;
