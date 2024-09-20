import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
// import ModalFooterBg from "@/assets/projects/modal-footer.svg";
import Link from "next/link";
// import ProblemImage from "@/assets/projects/problem-image.svg";
// import ProcessImage from "@/assets/projects/process-image.svg";
// import SolutionImage from "@/assets/projects/solution-image.svg";

const ProjectModal = ({
  title,
  description,
  projectData,
}: {
  title: string;
  description: string;
  projectData: any;
}) => {
  const {
    heroGradient,
    loomLink,
    projectHeroImage,
    projectReveiw,
    problemData,
    description: projectDescription,
    processData,
    solutionData,
    features,
    technologies,
  } = projectData;

  return (
    <Dialog>
      <DialogTrigger
        className="bg-[#F3F3F9] dark:bg-slate-900
       dark:border px-6 py-4 rounded-full font-thin text-base"
      >
        View Project
      </DialogTrigger>

      <DialogContent
        style={{
          zIndex: 999,
        }}
        className=" sm:w-[100vw] md:w-[90vw] z-50 rounded-3xl   lg:w-[95vw]  max-w-[90vw]   3xl:max-w-[80vw]  modalOpen   border-none overflow-hidden  bg-none h-auto  p-0  "
      >
        <div className="w-full h-[90vh] overflow-y-auto     p-0">
          <div
            style={{
              background: "linear-gradient(45deg, #8B01F7 0%, #D678FE 100%)",
              height: "full",
            }}
            className="w-full px-4 py-10 md:p-14  "
          >
            <DialogClose className="flex p-0 m-0 items-center  gap-4 text-white font-bold font-mulish text-2xl">
              <span className="bg-white rounded-full  p-2 text-black hover:bg-white/80 inline-block">
                <ArrowLeft className="h-4 w-4 " />
              </span>
              Back
            </DialogClose>
            {/* <div className="flex flex-col gap-4 xl:flex-row space-y-4 lg:space-y-0  items-center overflow-hidden"> */}
            <div className="grid grid-cols-1 gap-4 space-y-4 xl:grid-cols-2 lg:space-y-0  items-center overflow-hidden">
              <DialogHeader className=" text-start    space-y-4">
                <DialogTitle className="mt-4 font-flex font-bold text-4xl md:text-6xl text-white leading-tight">
                  {title}
                </DialogTitle>

                <DialogDescription className="font-mulish font-normal text-lg text-white/80  ">
                  {description}
                  {description}
                  {description}
                  {description}
                </DialogDescription>

                <div className="hidden lg:block">
                  {/* <ReveiwCard projectReveiw={projectReveiw} /> */}
                </div>
              </DialogHeader>

              <div className="w-full">
                <Image
                  src={"/images/p1.svg"}
                  alt="Project Hero"
                  width={700}
                  height={500}
                  priority
                  quality={100}
                  className="rounded-3xl  max-h-96    w-full h-full  "
                />
              </div>

              <div className="block lg:hidden ">
                {/* <ReveiwCard projectReveiw={projectReveiw} /> */}
              </div>
            </div>
          </div>

          {/* <div className=" px-4 md:px-16 mb-20  ">
            <div
              style={{
                position: "relative",
                paddingBottom: "54.90384615384616%",
                height: 0,
                marginTop: "50px",
              }}
              className="rounded-xl  overflow-hidden w-[70%] h-[70%]  mx-auto"
            >
              <iframe
                src={loomLink}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div> */}

          {/* Project Details steps with features and techs */}

          {/* <section className="px-4 md:px-16 mt-10 space-y-20 ">
            <ProcessWithImage data={problemData} ProcessImage={ProblemImage} />
            <ProcessWithImage
              data={solutionData}
              ProcessImage={SolutionImage}
            />
            <ProcessWithImage data={processData} ProcessImage={ProcessImage}/>

            <div className=" px-4 md:px-6 space-y-6 ">
              <h2 className="text-custom-text-secondary font-flex font-bold text-3xl">
                Features
              </h2>
              <p className="font-mulish font-normal text-xl max-w-[700px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                explicabo reiciendis natus laboriosam accusamus debitis quidem,
                nobis animi voluptate doloremque nam aliquid quia iure
                perspiciatis voluptas illo quis, velit nesciunt!
              </p>

              <div className="flex flex-wrap justify-between gap-x-4 gap-y-10">
                {features.featuresStepsData.map((featureStep) => (
                  <React.Fragment key={featureStep.id}>
                    <FeatureCard featureStep={featureStep} />
                  </React.Fragment>
                ))}
              </div>
            </div>


            <div className="px-4 py-12 space-y-6">
              <h2 className="text-custom-text-secondary font-flex font-bold text-3xl">
                Technologies
              </h2>
              <p className="font-mulish font-normal text-xl max-w-[750px]">
                Here is the list of technologies used in this project.
              </p>

              <div className="flex flex-wrap justify-center gap-y-4 gap-x-4    md:gap-y-10">
                {technologies.technologiesData.map((tech) => (
                  <React.Fragment key={tech.id}>
                    <TechnologyCard technology={tech} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section> */}
          {/* Modal Footer */}
          <div
            style={{
              // backgroundImage: `url(${ModalFooterBg.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "90%",
              overflow: "hidden",
              borderRadius: "24px",

              height: "auto",
              minHeight: "calc(100vh - 400px)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              position: "relative",
            }}
            className="container my-16"
          >
            <div className=" flex flex-col items-center  space-y-6">
              <h2 className="font-semibold font-mulish text-4xl text-primary">
                Have A Project In Mind? Let's Get Start.
              </h2>
              <p className="text-center font-mulish text-[#525665] dark:text-slate-300 text-xl font-medium md:max-w-[80%] ">
                You're looking for a solid partner for the project having in
                your mind. Connect with us to make your work easier.
              </p>

              <DialogClose className="w-full max-w-[260px]" asChild>
                <Link href="#contact" className="w-full max-w-[260px]">
                  <Button className="bg-[#8C00F7] rounded-xl hover:bg-[#8C00F7]/80 font-mulish text-lg font-bold px-6 py-4  h-[60px] w-full ">
                    Get Started
                    <ArrowUpRight className="w-5 h-5 ml-2  text-white " />
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
