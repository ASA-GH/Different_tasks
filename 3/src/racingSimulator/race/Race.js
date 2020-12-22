const StopTimer = (timer) => {
  clearInterval(timer);
};

const CompareMembers = (member1, member2) => {
  if (member1.distance === member2.distance) return member1.time - member2.time;
  return member2.distance - member1.distance;
};

const RunRace = (members, context, resolve) => {
  context.time = context.time + 1;

  let allFinished = true;
  for (const index in members) {
    let member = members[index];
    member.Run(context.time);

    if (!member.isStop && context.distance <= member.distance) {
      if (context.distance < member.distance)
        member.distance = context.distance;

      member.Stop();
    }
    if (!member.isStop) {
      allFinished = false;
    }
  }
  members.sort(CompareMembers);

  if (allFinished) {
    StopTimer(context.timer);
    resolve(members);
  } else {
    context.update(members, context.time);
  }
};

const Start = (members, finished, context) => {
  members.map((member) => {
    member.Prepare();
  });
  context.update(members, context.time);

  let promise = (members, context) =>
    new Promise((resolve) => {
      context["timer"] = setInterval(
        () => RunRace(members, context, resolve),
        1000
      );
    });

  promise(members, context)
    .then((members) => finished(members))
    .catch((members) => {
      console.log("error");
    });
};
export default Start;
