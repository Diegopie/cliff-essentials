const seasonalChallenges = $('.record-container')[0].children;
// console.log(seasonalChallenges.length);
// console.log(typeof (seasonalChallenges));

let parsedChallenges = [];

for (let i = 0; i < seasonalChallenges.length; i++) {
    // console.log($(seasonalChallenges[i]).children('h3').text());

    if ($(seasonalChallenges[i]).children('h3').text() === '') {
        // console.log('hit');
        continue;
    }

    const name = $(seasonalChallenges[i]).children('h3').text().trim();
    const description = $(seasonalChallenges[i]).children('.record-description').text().trim();;

    const allObjectives = $(seasonalChallenges[i]).children('.objective-progress-container').children();
    const parsedObjectives = [];
    for (let i = 0; i < allObjectives.length; i++) {
        // console.log($(allObjectives[i]).children('div').children('span').text())
        const objective = {
            isPercent: false,
            task: $(allObjectives[i]).children('strong').text().trim(),
            progress: 0,
            goal: $(allObjectives[i]).children('div').children('span').text().trim(),
            completed: false,
        }
        parsedObjectives.push(objective);
    }


    let reward = null;
    let xp = null;
    let dust = null;

    const allRewards = $(seasonalChallenges[i]).children('.triumph-rewards-container').children('.reward-item');
    for (let i = 0; i < allRewards.length; i++) {
        // console.log($(allRewards[i]).find('strong').text().trim());
        const thisReward = $(allRewards[i]).find('strong').text().trim();
        if (thisReward === 'War Table Upgrade') reward = thisReward;
        if (thisReward.includes('Challenger')) xp = thisReward;
        if (thisReward === 'Bright Dust') dust = thisReward;
    }

    const parsedData =
    {
        belongsTo: '',
        name: name,
        description: description,
        category: [],
        completed: false,
        challengeIndex: '',
        objectives: parsedObjectives,
        reward: reward,
        xp: xp,
        dust: dust
    }
    parsedChallenges.push(parsedData);
}

console.log(parsedChallenges);
