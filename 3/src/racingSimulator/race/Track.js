import CreateTransport from "../transport/CreateTransport";

const Track = () => {
  const CreateMembers = () => {
    let t0 = CreateTransport("1", "Motorcycle", true);
    let t1 = CreateTransport("2", "Motorcycle", false);
    let t2 = CreateTransport("3", "Car", 5);
    let t3 = CreateTransport("4", "Truck", 3000);
    return [t0, t1, t2, t3];
  };

  const RunRace = (members, context, resolve) => {
    context["time"] = context["time"] + 1;

    let allFinished = true;
    for (const index in members) {
      members[index].Run();

      if (
        !members[index].isStop &&
        context["distance"] <= members[index].distance
      ) {
        members[index].Stop(context["time"], context["distance"]);
      }
      if (!members[index].isStop) {
        allFinished = false;
      }
    }
    if (allFinished) {
      StopTimer(context["timer"]);
      resolve(members, context);
    }
  };

  const Finished = (members, context) => {
    console.log("finished");
  };

  function Start(members, context) {
    let promise = (members, context) =>
      new Promise((resolve) => {
        console.log("promise");

        context["timer"] = setInterval(
          () => RunRace(members, context, resolve),
          1000
        );
      });

    promise(members, context).then((members, context) =>
      Finished(members, context)
    );
  }

  const StopTimer = (timer) => {
    clearInterval(timer);
  };
  const Race = (context) => {
    let members = CreateMembers();
    Start(members, { distance: 1000, time: 0 });
  };
  return Race();
};

export default Track;
