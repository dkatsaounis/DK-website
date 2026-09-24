import OutLink from "./link";

export default function IntroductionText() {
  return (
    <div className="row-span-8 container mx-auto flex max-w-3xl flex-col items-start justify-center text-lg">
      <div className="m-auto mx-4 mt-24">
        I am a postdoctoral researcher at RWTH Aachen University and the{" "}
        <OutLink
          label="Insitute for Geometry and Applied Mathematics in the group of"
          url="https://www.igpm.rwth-aachen.de/"
        />{" "}
        <OutLink
          label="Michael Herty"
          url="https://www.igpm.rwth-aachen.de/team/herty"
        />
        , working on{" "}
        <OutLink
          label="DFG"
          url="https://www.spp2311.de/projekte/in-stent-restenosis-in-coronary-arteries-in-silico-investigations-based-on-patient-specific-clinical-data-and-meta-modeling-6/"
        />{" "}
        funded project under Niklas Kolbe.
        <br />
        <br /> I recently obtained my PhD in Applied Mathematics from the
        University of St Andrews, under the supervision of{" "}
        <OutLink
          label="Nikolaos Sfakianakis"
          url="https://sites.google.com/view/nikolaos-sfakianakis/"
        />{" "}
        and{" "}
        <OutLink
          label="Mark Chaplain"
          url="https://research-portal.st-andrews.ac.uk/en/persons/mark-andrew-joseph-chaplain"
        />
        .
        <br />
        <br /> My current research interests are cancer growth, cell migration
        and blood flow models.
        <br />
        <br /> Here you can find my{" "}
        <OutLink
          label="CV"
          url="https://drive.google.com/file/d/1ESddv2zkF14phEdi6hrmcMt5fwU6CJ2q/view?usp=sharing"
        />
        .
      </div>
    </div>
  );
}
