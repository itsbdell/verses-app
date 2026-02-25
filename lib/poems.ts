import { Poem } from "./types";

export const poems: Poem[] = [
  // ── W.H. Auden ──────────────────────────────────────
  {
    id: "auden-if-i-could-tell-you",
    title: "If I Could Tell You",
    author: "W. H. Auden",
    year: 1940,
    text: "Time will say nothing but I told you so,\nTime only knows the price we have to pay;\nIf I could tell you I would let you know.\n\nIf we should weep when clowns put on their show,\nIf we should stumble when musicians play,\nTime will say nothing but I told you so.\n\nThere are no fortunes to be told, although,\nBecause I love you more than I can say,\nIf I could tell you I would let you know.\n\nThe winds must come from somewhere when they blow,\nThere must be reasons why the leaves decay;\nTime will say nothing but I told you so.\n\nPerhaps the roses really want to grow,\nThe vision seriously intends to stay;\nIf I could tell you I would let you know.\n\nSuppose the lions all get up and go,\nAnd all the brooks and soldiers run away;\nWill Time say nothing but I told you so?\nIf I could tell you I would let you know.",
    tags: ["love", "time", "modern"],
  },
  {
    id: "auden-funeral-blues",
    title: "Funeral Blues",
    author: "W. H. Auden",
    year: 1938,
    text: "Stop all the clocks, cut off the telephone,\nPrevent the dog from barking with a juicy bone,\nSilence the pianos and with muffled drum\nBring out the coffin, let the mourners come.\n\nLet aeroplanes circle moaning overhead\nScribbling on the sky the message He Is Dead,\nPut crepe bows round the white necks of the public doves,\nLet the traffic policemen wear black cotton gloves.\n\nHe was my North, my South, my East and West,\nMy working week and my Sunday rest,\nMy noon, my midnight, my talk, my song;\nI thought that love would last for ever: I was wrong.\n\nThe stars are not wanted now: put out every one;\nPack up the moon and dismantle the sun;\nPour away the ocean and sweep up the wood;\nFor nothing now can ever come to any good.",
    tags: ["love", "grief", "modern"],
  },
  {
    id: "auden-musee-des-beaux-arts",
    title: "Musée des Beaux Arts",
    author: "W. H. Auden",
    year: 1938,
    text: "About suffering they were never wrong,\nThe Old Masters: how well they understood\nIts human position; how it takes place\nWhile someone else is eating or opening a window or just walking dully along;\nHow, when the aged are reverently, passionately waiting\nFor the miraculous birth, there always must be\nChildren who did not specially want it to happen, skating\nOn a pond at the edge of the wood:\nThey never forgot\nThat even the dreadful martyrdom must run its course\nAnyhow in a corner, some untidy spot\nWhere the dogs go on with their doggy life and the torturer's horse\nScratches its innocent behind on a tree.\n\nIn Brueghel's Icarus, for instance: how everything turns away\nQuite leisurely from the disaster; the ploughman may\nHave heard the splash, the forsaken cry,\nBut for him it was not an important failure; the sun shone\nAs it had to on the white legs disappearing into the green\nWater; and the expensive delicate ship that must have seen\nSomething amazing, a boy falling out of the sky,\nHad somewhere to get to and sailed calmly on.",
    tags: ["suffering", "art", "modern"],
  },

  // ── Emily Dickinson ──────────────────────────────────
  {
    id: "dickinson-hope-is-the-thing-with-feathers",
    title: "Hope is the Thing with Feathers",
    author: "Emily Dickinson",
    year: 1861,
    text: '"Hope" is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -\n\nAnd sweetest - in the Gale - is heard -\nAnd sore must be the storm -\nThat could abash the little Bird\nThat kept so many warm -\n\nI\'ve heard it in the chillest land -\nAnd on the strangest Sea -\nYet - never - in Extremity,\nIt asked a crumb - of me.',
    tags: ["hope", "nature", "romantic"],
  },
  {
    id: "dickinson-tell-all-the-truth",
    title: "Tell all the truth but tell it slant",
    author: "Emily Dickinson",
    year: 1872,
    text: "Tell all the truth but tell it slant —\nSuccess in Circuit lies\nToo bright for our infirm Delight\nThe Truth's superb surprise\nAs Lightning to the Children eased\nWith explanation kind\nThe Truth must dazzle gradually\nOr every man be blind —",
    tags: ["truth", "wisdom", "romantic"],
  },
  {
    id: "dickinson-the-brain-is-wider",
    title: "The Brain — is wider than the Sky",
    author: "Emily Dickinson",
    year: 1862,
    text: "The Brain — is wider than the Sky —\nFor — put them side by side —\nThe one the other will contain\nWith ease — and you — beside —\n\nThe Brain is deeper than the sea —\nFor — hold them — Blue to Blue —\nThe one the other will absorb —\nAs Sponges — Buckets — do —\n\nThe Brain is just the weight of God —\nFor — Heft them — Pound for Pound —\nAnd they will differ — if they do —\nAs Syllable from Sound —",
    tags: ["mind", "nature", "romantic"],
  },

  // ── Robert Frost ─────────────────────────────────────
  {
    id: "frost-the-road-not-taken",
    title: "The Road Not Taken",
    author: "Robert Frost",
    year: 1916,
    text: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
    tags: ["choice", "nature", "modern"],
  },
  {
    id: "frost-stopping-by-woods",
    title: "Stopping by Woods on a Snowy Evening",
    author: "Robert Frost",
    year: 1923,
    text: "Whose woods these are I think I know.\nHis house is in the village though;\nHe will not see me stopping here\nTo watch his woods fill up with snow.\n\nMy little horse must think it queer\nTo stop without a farmhouse near\nBetween the woods and frozen lake\nThe darkest evening of the year.\n\nHe gives his harness bells a shake\nTo ask if there is some mistake.\nThe only other sound's the sweep\nOf easy wind and downy flake.\n\nThe woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.",
    tags: ["nature", "winter", "modern"],
  },
  {
    id: "frost-fire-and-ice",
    title: "Fire and Ice",
    author: "Robert Frost",
    year: 1920,
    text: "Some say the world will end in fire,\nSome say in ice.\nFrom what I've tasted of desire\nI hold with those who favor fire.\nBut if it had to perish twice,\nI think I know enough of hate\nTo say that for destruction ice\nIs also great\nAnd would suffice.",
    tags: ["destruction", "desire", "modern"],
  },
  {
    id: "frost-nothing-gold-can-stay",
    title: "Nothing Gold Can Stay",
    author: "Robert Frost",
    year: 1923,
    text: "Nature's first green is gold,\nHer hardest hue to hold.\nHer early leaf's a flower;\nBut only so an hour.\nThen leaf subsides to leaf.\nSo Eden sank to grief,\nSo dawn goes down to day.\nNothing gold can stay.",
    tags: ["nature", "time", "modern"],
  },

  // ── William Shakespeare ──────────────────────────────
  {
    id: "shakespeare-sonnet-18",
    title: "Sonnet 18",
    author: "William Shakespeare",
    year: 1609,
    text: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date:\n\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd;\nAnd every fair from fair sometime declines,\nBy chance, or nature's changing course untrimm'd;\n\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st;\nNor shall death brag thou wander'st in his shade,\nWhen in eternal lines to time thou grow'st:\n\nSo long as men can breathe, or eyes can see,\nSo long lives this, and this gives life to thee.",
    tags: ["love", "beauty", "sonnet"],
  },
  {
    id: "shakespeare-sonnet-116",
    title: "Sonnet 116",
    author: "William Shakespeare",
    year: 1609,
    text: "Let me not to the marriage of true minds\nAdmit impediments. Love is not love\nWhich alters when it alteration finds,\nOr bends with the remover to remove:\n\nO, no! it is an ever-fixed mark,\nThat looks on tempests and is never shaken;\nIt is the star to every wandering bark,\nWhose worth's unknown, although his height be taken.\n\nLove's not Time's fool, though rosy lips and cheeks\nWithin his bending sickle's compass come;\nLove alters not with his brief hours and weeks,\nBut bears it out even to the edge of doom.\n\nIf this be error and upon me proved,\nI never writ, nor no man ever loved.",
    tags: ["love", "devotion", "sonnet"],
  },

  // ── Walt Whitman ─────────────────────────────────────
  {
    id: "whitman-beat-beat-drums",
    title: "Beat! Beat! Drums!",
    author: "Walt Whitman",
    year: 1861,
    text: "Beat! beat! drums!—blow! bugles! blow!\nThrough the windows—through doors—burst like a ruthless force,\nInto the solemn church, and scatter the congregation,\nInto the school where the scholar is studying;\nLeave not the bridegroom quiet—no happiness must he have now with his bride,\nNor the peaceful farmer any peace, ploughing his field or gathering his grain,\nSo fierce you whirr and pound you drums—so shrill you bugles blow.\n\nBeat! beat! drums!—blow! bugles! blow!\nOver the traffic of cities—over the rumble of wheels in the streets;\nAre beds prepared for sleepers at night in the houses? no sleepers must sleep in those beds,\nNo bargainers' bargains by day—no brokers or speculators—would they continue?\nWould the talkers be talking? would the singer attempt to sing?\nWould the lawyer rise in the court to state his case before the judge?\nThen rattle quicker, heavier drums—you bugles wilder blow.\n\nBeat! beat! drums!—blow! bugles! blow!\nMake no parley—stop for no expostulation,\nMind not the timid—mind not the weeper or prayer,\nMind not the old man beseeching the young man,\nLet not the child's voice be heard, nor the mother's entreaties,\nMake even the trestles to shake the dead where they lie awaiting the hearses,\nSo strong you thump O terrible drums—so loud you bugles blow.",
    tags: ["war", "urgency", "romantic"],
  },
  {
    id: "whitman-o-captain",
    title: "O Captain! My Captain!",
    author: "Walt Whitman",
    year: 1865,
    text: "O Captain! my Captain! our fearful trip is done,\nThe ship has weather'd every rack, the prize we sought is won,\nThe port is near, the bells I hear, the people all exulting,\nWhile follow eyes the steady keel, the vessel grim and daring;\n\nBut O heart! heart! heart!\nO the bleeding drops of red,\nWhere on the deck my Captain lies,\nFallen cold and dead.\n\nO Captain! my Captain! rise up and hear the bells;\nRise up—for you the flag is flung—for you the bugle trills,\nFor you bouquets and ribbon'd wreaths—for you the shores a-crowding,\nFor you they call, the swaying mass, their eager faces turning;\n\nHere Captain! dear father!\nThis arm beneath your head!\nIt is some dream that on the deck,\nYou've fallen cold and dead.",
    tags: ["grief", "leadership", "romantic"],
  },

  // ── Dylan Thomas ─────────────────────────────────────
  {
    id: "thomas-do-not-go-gentle",
    title: "Do Not Go Gentle into That Good Night",
    author: "Dylan Thomas",
    year: 1947,
    text: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n\nThough wise men at their end know dark is right,\nBecause their words had forked no lightning they\nDo not go gentle into that good night.\n\nGood men, the last wave by, crying how bright\nTheir frail deeds might have danced in a green bay,\nRage, rage against the dying of the light.\n\nWild men who caught and sang the sun in flight,\nAnd learn, too late, they grieved it on its way,\nDo not go gentle into that good night.\n\nGrave men, near death, who see with blinding sight\nBlind eyes could blaze like meteors and be gay,\nRage, rage against the dying of the light.\n\nAnd you, my father, there on the sad height,\nCurse, bless, me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light.",
    tags: ["death", "defiance", "modern"],
  },

  // ── Percy Bysshe Shelley ─────────────────────────────
  {
    id: "shelley-ozymandias",
    title: "Ozymandias",
    author: "Percy Bysshe Shelley",
    year: 1818,
    text: "I met a traveller from an antique land,\nWho said—\"Two vast and trunkless legs of stone\nStand in the desert. . . . Near them, on the sand,\nHalf sunk a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal, these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.\"",
    tags: ["power", "time", "romantic"],
  },

  // ── William Butler Yeats ─────────────────────────────
  {
    id: "yeats-the-second-coming",
    title: "The Second Coming",
    author: "W. B. Yeats",
    year: 1919,
    text: "Turning and turning in the widening gyre\nThe falcon cannot hear the falconer;\nThings fall apart; the centre cannot hold;\nMere anarchy is loosed upon the world,\nThe blood-dimmed tide is loosed, and everywhere\nThe ceremony of innocence is drowned;\nThe best lack all conviction, while the worst\nAre full of passionate intensity.\n\nSurely some revelation is at hand;\nSurely the Second Coming is at hand.\nThe Second Coming! Hardly are those words out\nWhen a vast image out of Spiritus Mundi\nTroubles my sight: somewhere in sands of the desert\nA shape with lion body and the head of a man,\nA gaze blank and pitiless as the sun,\nIs moving its slow thighs, while all about it\nReel shadows of the indignant desert birds.\nThe darkness drops again; but now I know\nThat twenty centuries of stony sleep\nWere vexed to nightmare by a rocking cradle,\nAnd what rough beast, its hour come round at last,\nSlouches towards Bethlehem to be born?",
    tags: ["apocalypse", "vision", "modern"],
  },
  {
    id: "yeats-lake-isle-innisfree",
    title: "The Lake Isle of Innisfree",
    author: "W. B. Yeats",
    year: 1890,
    text: "I will arise and go now, and go to Innisfree,\nAnd a small cabin build there, of clay and wattles made:\nNine bean-rows will I have there, a hive for the honey-bee;\nAnd live alone in the bee-loud glade.\n\nAnd I shall have some peace there, for peace comes dropping slow,\nDropping from the veils of the morning to where the cricket sings;\nThere midnight's all a glimmer, and noon a purple glow,\nAnd evening full of the linnet's wings.\n\nI will arise and go now, for always night and day\nI hear lake water lapping with low sounds by the shore;\nWhile I stand on the roadway, or on the pavements grey,\nI hear it in the deep heart's core.",
    tags: ["nature", "peace", "romantic"],
  },

  // ── Langston Hughes ──────────────────────────────────
  {
    id: "hughes-harlem",
    title: "Harlem",
    author: "Langston Hughes",
    year: 1951,
    text: "What happens to a dream deferred?\n\nDoes it dry up\nlike a raisin in the sun?\nOr fester like a sore—\nAnd then run?\nDoes it stink like rotten meat?\nOr crust and sugar over—\nlike a syrupy sweet?\n\nMaybe it just sags\nlike a heavy load.\n\nOr does it explode?",
    tags: ["dreams", "justice", "modern"],
  },
  {
    id: "hughes-the-negro-speaks-of-rivers",
    title: "The Negro Speaks of Rivers",
    author: "Langston Hughes",
    year: 1921,
    text: "I've known rivers:\nI've known rivers ancient as the world and older than the\n     flow of human blood in human veins.\n\nMy soul has grown deep like the rivers.\n\nI bathed in the Euphrates when dawns were young.\nI built my hut near the Congo and it lulled me to sleep.\nI looked upon the Nile and raised the pyramids above it.\nI heard the singing of the Mississippi when Abe Lincoln\n     went down to New Orleans, and I've seen its muddy\n     bosom turn all golden in the sunset.\n\nI've known rivers:\nAncient, dusky rivers.\n\nMy soul has grown deep like the rivers.",
    tags: ["identity", "history", "modern"],
  },

  // ── Edgar Allan Poe ──────────────────────────────────
  {
    id: "poe-alone",
    title: "Alone",
    author: "Edgar Allan Poe",
    year: 1829,
    text: "From childhood's hour I have not been\nAs others were—I have not seen\nAs others saw—I could not bring\nMy passions from a common spring—\nFrom the same source I have not taken\nMy sorrow—I could not awaken\nMy heart to joy at the same tone—\nAnd all I lov'd—I lov'd alone—\nThen—in my childhood—in the dawn\nOf a most stormy life—was drawn\nFrom ev'ry depth of good and ill\nThe mystery which binds me still—\nFrom the torrent, or the fountain—\nFrom the red cliff of the mountain—\nFrom the sun that 'round me roll'd\nIn its autumn tint of gold—\nFrom the lightning in the sky\nAs it pass'd me flying by—\nFrom the thunder, and the storm—\nAnd the cloud that took the form\n(When the rest of Heaven was blue)\nOf a demon in my view—",
    tags: ["solitude", "darkness", "romantic"],
  },

  // ── Maya Angelou ─────────────────────────────────────
  {
    id: "angelou-still-i-rise",
    title: "Still I Rise",
    author: "Maya Angelou",
    year: 1978,
    text: "You may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I'll rise.\n\nDoes my sassiness upset you?\nWhy are you beset with gloom?\n'Cause I walk like I've got oil wells\nPumping in my living room.\n\nJust like moons and like suns,\nWith the certainty of tides,\nJust like hopes springing high,\nStill I'll rise.\n\nDid you want to see me broken?\nBowed head and lowered eyes?\nShoulders falling down like teardrops,\nWeakened by my soulful cries?\n\nYou may shoot me with your words,\nYou may cut me with your eyes,\nYou may kill me with your hatefulness,\nBut still, like air, I'll rise.",
    tags: ["resilience", "identity", "modern"],
  },

  // ── Edna St. Vincent Millay ──────────────────────────
  {
    id: "millay-first-fig",
    title: "First Fig",
    author: "Edna St. Vincent Millay",
    year: 1920,
    text: "My candle burns at both ends;\nIt will not last the night;\nBut ah, my foes, and oh, my friends—\nIt gives a lovely light!",
    tags: ["life", "brevity", "modern"],
  },

  // ── William Ernest Henley ────────────────────────────
  {
    id: "henley-invictus",
    title: "Invictus",
    author: "William Ernest Henley",
    year: 1875,
    text: "Out of the night that covers me,\nBlack as the Pit from pole to pole,\nI thank whatever gods may be\nFor my unconquerable soul.\n\nIn the fell clutch of circumstance\nI have not winced nor cried aloud.\nUnder the bludgeonings of chance\nMy head is bloody, but unbowed.\n\nBeyond this place of wrath and tears\nLooms but the Horror of the shade,\nAnd yet the menace of the years\nFinds, and shall find, me unafraid.\n\nIt matters not how strait the gate,\nHow charged with punishments the scroll,\nI am the master of my fate:\nI am the captain of my soul.",
    tags: ["resilience", "defiance", "victorian"],
  },

  // ── Rainer Maria Rilke ───────────────────────────────
  {
    id: "rilke-archaic-torso-of-apollo",
    title: "Archaic Torso of Apollo",
    author: "Rainer Maria Rilke",
    year: 1908,
    text: "We cannot know his legendary head\nwith eyes like ripening fruit. And yet his torso\nis still suffused with brilliance from inside,\nlike a lamp, in which his gaze, now turned to low,\n\ngleams in all its power. Otherwise\nthe curved breast could not dazzle you so, nor could\na smile run through the placid hips and thighs\nto that dark center where procreation flared.\n\nOtherwise this stone would seem defaced\nbeneath the translucent cascade of the shoulders\nand would not glisten like a wild beast's fur:\n\nwould not, from all the borders of itself,\nburst like a star: for here there is no place\nthat does not see you. You must change your life.",
    tags: ["art", "transformation", "modern"],
  },

  // ── Mary Oliver ──────────────────────────────────────
  {
    id: "oliver-the-summer-day",
    title: "The Summer Day",
    author: "Mary Oliver",
    year: 1990,
    text: "Who made the world?\nWho made the swan, and the black bear?\nWho made the grasshopper?\nThis grasshopper, I mean—\nthe one who has flung herself out of the grass,\nthe one who is eating sugar out of my hand,\nwho is moving her jaws back and forth instead of up and down—\nwho is gazing around with her enormous and complicated eyes.\nNow she lifts her pale forearms and thoroughly washes her face.\nNow she snaps her wings open, and floats away.\nI don't know exactly what a prayer is.\nI do know how to pay attention, how to fall down\ninto the grass, how to kneel down in the grass,\nhow to be idle and blessed, how to stroll through the fields,\nwhich is what I have been doing all day.\nTell me, what else should I have done?\nDoesn't everything die at last, and too soon?\nTell me, what is it you plan to do\nwith your one wild and precious life?",
    tags: ["nature", "attention", "modern"],
  },

  // ── e.e. cummings ────────────────────────────────────
  {
    id: "cummings-i-carry-your-heart",
    title: "i carry your heart with me",
    author: "e. e. cummings",
    year: 1952,
    text: "i carry your heart with me(i carry it in\nmy heart)i am never without it(anywhere\ni go you go,my dear;and whatever is done\nby only me is your doing,my darling)\n\ni fear no fate(for you are my fate,my sweet)i want\nno world(for beautiful you are my world,my true)\nand it's you are whatever a moon has always meant\nand whatever a sun will always sing is you\n\nhere is the deepest secret nobody knows\n(here is the root of the root and the bud of the bud\nand the sky of the sky of a tree called life;which grows\nhigher than soul can hope or mind can hide)\nand this is the wonder that's keeping the stars apart\n\ni carry your heart(i carry it in my heart)",
    tags: ["love", "devotion", "modern"],
  },

  // ── Elizabeth Bishop ──────────────────────────────────
  {
    id: "bishop-one-art",
    title: "One Art",
    author: "Elizabeth Bishop",
    year: 1976,
    text: "The art of losing isn't hard to master;\nso many things seem filled with the intent\nto be lost that their loss is no disaster.\n\nLose something every day. Accept the fluster\nof lost door keys, the hour badly spent.\nThe art of losing isn't hard to master.\n\nThen practice losing farther, losing faster:\nplaces, and names, and where it was you meant\nto travel. None of these will bring disaster.\n\nI lost my mother's watch. And look! my last, or\nnext-to-last, of three loved houses went.\nThe art of losing isn't hard to master.\n\nI lost two cities, lovely ones. And, vaster,\nsome realms I owned, two rivers, a continent.\nI miss them, but it wasn't a disaster.\n\n—Even losing you (the joking voice, a gesture\nI love) I shan't have lied. It's evident\nthe art of losing's not too hard to master\nthough it may look like (Write it!) like disaster.",
    tags: ["loss", "grief", "modern"],
  },

  // ── John Keats ───────────────────────────────────────
  {
    id: "keats-bright-star",
    title: "Bright Star",
    author: "John Keats",
    year: 1819,
    text: "Bright star, would I were stedfast as thou art—\nNot in lone splendour hung aloft the night\nAnd watching, with eternal lids apart,\nLike nature's patient, sleepless Eremite,\nThe moving waters at their priestlike task\nOf pure ablution round earth's human shores,\nOr gazing on the new soft-fallen mask\nOf snow upon the mountains and the moors—\nNo—yet still stedfast, still unchangeable,\nPillow'd upon my fair love's ripening breast,\nTo feel for ever its soft fall and swell,\nAwake for ever in a sweet unrest,\nStill, still to hear her tender-taken breath,\nAnd so live ever—or else swoon to death.",
    tags: ["love", "nature", "romantic"],
  },

  // ── William Blake ────────────────────────────────────
  {
    id: "blake-the-tyger",
    title: "The Tyger",
    author: "William Blake",
    year: 1794,
    text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?\n\nIn what distant deeps or skies,\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?\n\nAnd what shoulder, & what art,\nCould twist the sinews of thy heart?\nAnd when thy heart began to beat,\nWhat dread hand? & what dread feet?\n\nWhat the hammer? what the chain,\nIn what furnace was thy brain?\nWhat the anvil? what dread grasp,\nDare its deadly terrors clasp!\n\nWhen the stars threw down their spears\nAnd water'd heaven with their tears:\nDid he smile his work to see?\nDid he who made the Lamb make thee?\n\nTyger Tyger burning bright,\nIn the forests of the night:\nWhat immortal hand or eye,\nDare frame thy fearful symmetry?",
    tags: ["creation", "power", "romantic"],
  },
];

export const defaultPoem = poems[0];
