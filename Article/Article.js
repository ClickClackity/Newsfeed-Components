

/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Song Lyrics",
    date: "October 3rd, 2019",
    firstParagraph:
    `The Light At The End Of The Tunnel Was Bright Enough To Blind Even The Blindest Of Men|
    I will kill the pain|
    I will kill the loneliness|
    I will find a way to fight|
    I will fight my way through this fire|
    I will be saved|
    I will be saved|
    We all can be saved!|
    
    I know you're searching for meaning!
    In the desolate wasteland of your life!
    But heed to my words, that you must!
    Trust in me, that life will not be this way!
    That there is a life, there is a life waiting!
    Waiting for you beyond all the misery!
    
    I will kill the pain.
    I will kill the loneliness.
    I will find a way to fight.
    I will fight my way through this fire.
    I will be saved.
    I will be saved!
    We all can be saved.
    We all can be saved!
    We all will be saved.
    
    Don't you go!
    Don't you go!
    The light isn't calling your name yet!
    Don't you go!
    I need you here!
    We need you here!
    Don't you see you aren't alone!
    There's millions of us just like you!
    So don't you go!
    We need to stand!
    We need to fight!
    Even when our spirit has been broken!
    
    WE CAN FIGHT FIRE WITH FIRE!
    WE CAN FIGHT FIRE WITH FIRE!
    DON'T LET THAT FLAME INSIDE YOU BURN OUT!
    BURN OUT!
    BURN OUT!
    DON'T LET THAT FLAME INSIDE YOU BURN OUT!
    BURN OUT!
    BURN OUT!
    
    I will kill the pain.
    I will kill the loneliness.
    I will find a way to fight.
    I will fight my way through this fire.
    I will be saved.
    I will be saved!
    We all can be saved.
    We all can be saved!
    We all will be saved.
    We all will be saved!`,

    secondParagraph: `Stopped To Rest:
    The day has begun.
    The leaves have started to fall.
    Shadows up against the wall.
    Are no longer there.
    Clouds roll in.
    Time is standing still.
    There are no longer flowers on the hill.
    Seasons have changed.
    Snowflakes sleeping on the earth.
    White flurries, staring out in a gaze.
    The days have ran by me.
    Time is to fast for me to catch.
    All I hear is their shouts
    "run run run."
    Someone shoulda told me this life was no fun.
    
    Days spent running around.
    Trying to make up the lost time.
    I spent in a dreamland where I was free.
    No hurries, no worries.
    No deaths, no regrets.
    Just time to myself with me myself and I.
    But look how much just slipped away.
    Calandars just flipped away.
    I sat in a daze, a blurry haze.
    I thought I was young, time to kill.
    No need to rush!
    I have my whole life in front of me.
    Now I realize I'm halfway done.
    But I haven't yet begun to run.
    `,

    thirdParagraph: `The Fate:
    For death shall make beautiful liars of us all.
    Only the fools and idiots shall believe it will be of any relevance.
    We will sleep among the first children of Earth.
    In a perpetual state of ignorant bliss floating along the crowded highway.
    
    We seek asylum in these sheltered corridors.
    Whilst holding the truth, we inevitably think they all seek.
    See not what lies ahead on this road of abomination.
    Lest not let the youngest lie their eyes upon.
    
    All the wisdom in the world won't save you from a shallow ditch.
    All the money in the world won't buy you eternity.
    So think not what lies in the open corridors between thoughtlessness and remorse.
    Find the hidden treasures among regret and despair for they'll be fair.
    
    The conquering of a modern day in plain sight.
    Revealed to all who spoke so suddenly.
    In the silence of night, to break ever so peacefully.
    For finding your path is never out of sight.
    
    We look down these empty hallways of pure madness.
    Into the glistening souls of all of those who wander aimlessly.
    For no home shall they ever know of again.
    We shall learn to find comfort in these vague ambiguities.
    
    We can seek all the knowledge we could ever acquire.
    But hope not, for once the world is stripped away and revealed to you.
    Your faith in humanity will slip out of your grasp.
    As if you were trying to hold onto raindrops.
    
    Watch as the world you knew falls apart around you.
    Knowledge is power, yet sometimes can make us feel powerless.
    Give up all your insecurities, give up all your indecisiveness.
    Today is today, so make it today and don't let it rain.`
  }
];

// Create paragraph

const createParagraph = p => {
  const paragraph = document.createElement('p');
  paragraph.textContent = p;
  return paragraph;
};

// Article creation, create elements, then assign data, then + classes, listeners, attach el's & return

const createArt = (title, date, p1, p2, p3) => {
  const article = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const expandButton = document.createElement('span');
//
  articleTitle.textContent = title;
  articleDate.textContent = date;
  const paragraph1 = createParagraph(p1);
  const paragraph2 = createParagraph(p2);
  const paragraph3 = createParagraph(p3);
  expandButton.textContent = 'Read this article!';
//
  article.classList.add('article');
  articleDate.classList.add('date');
  expandButton.classList.add('expandButton');
//
  expandButton.addEventListener('click', el => {
    article.classList.toggle('article-open');
  
    if(article.classList.contains('article-open')) {
    expandButton.textContent = 'Remove article';
    } else {
    el.target.parentElement.parentElement.removeChild(el.target.parentElement);
    }
  });
//
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(paragraph1);
  article.appendChild(paragraph2);
  article.appendChild(paragraph3);
  article.appendChild(expandButton);
//
  return article;
};

const articlesCon = document.querySelector('.articles');

data.forEach(art => {
  articlesCon.appendChild(
    createArt(
      art.title,
      art.date,
      art.firstParagraph,
      art.secondParagraph,
      art.thirdParagraph
    )
  );
});


