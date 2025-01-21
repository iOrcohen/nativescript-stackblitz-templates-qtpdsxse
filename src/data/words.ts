// Group words into 20 levels based on general English word frequency
export interface Word {
  word: string;
  translation: string;
  level: number;
  isVerb: boolean;
  example: string;
  association?: string;
}

export const words: Word[] = [
  // Level 1-10 words (keeping existing entries)
  { word: "ability", translation: "יכולת", level: 1, isVerb: false, example: "Her ability to solve complex problems is remarkable." },
  { word: "above", translation: "מעל", level: 1, isVerb: false, example: "The birds flew above the trees." },
  { word: "accept", translation: "לקבל", level: 1, isVerb: true, example: "I accept your apology." },
  { word: "accident", translation: "תאונה", level: 1, isVerb: false, example: "It was a minor accident." },
  { word: "accurate", translation: "מדויק", level: 1, isVerb: false, example: "The measurements must be accurate." },
  { word: "achieve", translation: "להשיג", level: 1, isVerb: true, example: "She worked hard to achieve her goals." },
  { word: "active", translation: "פעיל", level: 1, isVerb: false, example: "He leads an active lifestyle." },
  { word: "actual", translation: "ממשי", level: 1, isVerb: false, example: "These are the actual results." },
  { word: "adapt", translation: "להסתגל", level: 1, isVerb: true, example: "Animals adapt to their environment." },
  { word: "add", translation: "להוסיף", level: 1, isVerb: true, example: "Add salt to taste." },

  // Level 2
  { word: "address", translation: "כתובת", level: 2, isVerb: false, example: "What's your email address?" },
  { word: "adjust", translation: "להתאים", level: 2, isVerb: true, example: "Adjust the volume please." },
  { word: "admire", translation: "להעריץ", level: 2, isVerb: true, example: "I admire your courage." },
  { word: "advance", translation: "להתקדם", level: 2, isVerb: true, example: "Technology continues to advance." },
  { word: "advantage", translation: "יתרון", level: 2, isVerb: false, example: "Being bilingual is an advantage." },
  { word: "advice", translation: "עצה", level: 2, isVerb: false, example: "He gave me good advice." },
  { word: "affect", translation: "להשפיע", level: 2, isVerb: true, example: "The weather affects my mood." },
  { word: "afford", translation: "להרשות", level: 2, isVerb: true, example: "Can you afford this car?" },
  { word: "afraid", translation: "מפחד", level: 2, isVerb: false, example: "Don't be afraid." },
  { word: "after", translation: "אחרי", level: 2, isVerb: false, example: "We'll meet after lunch." },

  // Level 3
  { word: "again", translation: "שוב", level: 3, isVerb: false, example: "Let's try again." },
  { word: "against", translation: "נגד", level: 3, isVerb: false, example: "He leaned against the wall." },
  { word: "age", translation: "גיל", level: 3, isVerb: false, example: "What's your age?" },
  { word: "agree", translation: "להסכים", level: 3, isVerb: true, example: "I agree with you." },
  { word: "ahead", translation: "קדימה", level: 3, isVerb: false, example: "Look ahead." },
  { word: "aim", translation: "מטרה", level: 3, isVerb: false, example: "My aim is to graduate." },
  { word: "air", translation: "אוויר", level: 3, isVerb: false, example: "Fresh air is important." },
  { word: "allow", translation: "להרשות", level: 3, isVerb: true, example: "Parents allow their children to play." },
  { word: "almost", translation: "כמעט", level: 3, isVerb: false, example: "It's almost time." },
  { word: "alone", translation: "לבד", level: 3, isVerb: false, example: "She lives alone." },

  // Level 4
  { word: "along", translation: "לאורך", level: 4, isVerb: false, example: "Walk along the beach." },
  { word: "already", translation: "כבר", level: 4, isVerb: false, example: "I've already eaten." },
  { word: "also", translation: "גם", level: 4, isVerb: false, example: "He also likes reading." },
  { word: "although", translation: "למרות", level: 4, isVerb: false, example: "Although it rained, we went out." },
  { word: "always", translation: "תמיד", level: 4, isVerb: false, example: "She's always on time." },
  { word: "among", translation: "בין", level: 4, isVerb: false, example: "Choose among these options." },
  { word: "amount", translation: "כמות", level: 4, isVerb: false, example: "A large amount of money." },
  { word: "amuse", translation: "לשעשע", level: 4, isVerb: true, example: "The clown amused the children." },
  { word: "analyze", translation: "לנתח", level: 4, isVerb: true, example: "Let's analyze the data." },
  { word: "ancient", translation: "עתיק", level: 4, isVerb: false, example: "Ancient ruins." },

  // Level 5
  { word: "anger", translation: "כעס", level: 5, isVerb: false, example: "Control your anger." },
  { word: "angle", translation: "זווית", level: 5, isVerb: false, example: "Look at it from this angle." },
  { word: "angry", translation: "כועס", level: 5, isVerb: false, example: "Don't be angry." },
  { word: "animal", translation: "חיה", level: 5, isVerb: false, example: "My favorite animal." },
  { word: "announce", translation: "להכריז", level: 5, isVerb: true, example: "They announced the winner." },
  { word: "annoy", translation: "להרגיז", level: 5, isVerb: true, example: "Don't annoy your sister." },
  { word: "another", translation: "אחר", level: 5, isVerb: false, example: "Try another one." },
  { word: "answer", translation: "תשובה", level: 5, isVerb: false, example: "What's the answer?" },
  { word: "anxiety", translation: "חרדה", level: 5, isVerb: false, example: "Reduce your anxiety." },
  { word: "any", translation: "כל", level: 5, isVerb: false, example: "Any questions?" },

  // Level 6
  { word: "apart", translation: "בנפרד", level: 6, isVerb: false, example: "Keep these items apart." },
  { word: "apparent", translation: "ברור", level: 6, isVerb: false, example: "It was apparent to everyone." },
  { word: "appeal", translation: "ערעור", level: 6, isVerb: false, example: "File an appeal." },
  { word: "appear", translation: "להופיע", level: 6, isVerb: true, example: "The sun appeared." },
  { word: "apple", translation: "תפוח", level: 6, isVerb: false, example: "Eat an apple a day." },
  { word: "apply", translation: "להגיש", level: 6, isVerb: true, example: "Apply for the job." },
  { word: "appoint", translation: "למנות", level: 6, isVerb: true, example: "Appoint a leader." },
  { word: "approve", translation: "לאשר", level: 6, isVerb: true, example: "Approve the request." },
  { word: "area", translation: "אזור", level: 6, isVerb: false, example: "A large area." },
  { word: "argue", translation: "להתווכח", level: 6, isVerb: true, example: "Don't argue with me." },

  // Level 7
  { word: "arise", translation: "לקום", level: 7, isVerb: true, example: "Problems arise." },
  { word: "arm", translation: "זרוע", level: 7, isVerb: false, example: "Raise your arm." },
  { word: "army", translation: "צבא", level: 7, isVerb: false, example: "Join the army." },
  { word: "around", translation: "מסביב", level: 7, isVerb: false, example: "Look around." },
  { word: "arrange", translation: "לסדר", level: 7, isVerb: true, example: "Arrange the flowers." },
  { word: "arrest", translation: "לעצור", level: 7, isVerb: true, example: "Arrest the suspect." },
  { word: "arrive", translation: "להגיע", level: 7, isVerb: true, example: "When do you arrive?" },
  { word: "art", translation: "אמנות", level: 7, isVerb: false, example: "Modern art." },
  { word: "article", translation: "מאמר", level: 7, isVerb: false, example: "Read the article." },
  { word: "artist", translation: "אמן", level: 7, isVerb: false, example: "A talented artist." },

  // Level 8
  { word: "aside", translation: "הצידה", level: 8, isVerb: false, example: "Step aside." },
  { word: "ask", translation: "לשאול", level: 8, isVerb: true, example: "Ask a question." },
  { word: "asleep", translation: "ישן", level: 8, isVerb: false, example: "Fall asleep." },
  { word: "assist", translation: "לעזור", level: 8, isVerb: true, example: "Assist the elderly." },
  { word: "associate", translation: "לשייך", level: 8, isVerb: true, example: "Associate ideas." },
  { word: "assume", translation: "להניח", level: 8, isVerb: true, example: "Don't assume." },
  { word: "assure", translation: "להבטיח", level: 8, isVerb: true, example: "I assure you." },
  { word: "attach", translation: "לצרף", level: 8, isVerb: true, example: "Attach the file." },
  { word: "attack", translation: "להתקיף", level: 8, isVerb: true, example: "Defend from attack." },
  { word: "attempt", translation: "ניסיון", level: 8, isVerb: false, example: "Make an attempt." },

  // Level 9
  { word: "attend", translation: "להשתתף", level: 9, isVerb: true, example: "Attend the meeting." },
  { word: "attention", translation: "תשומת לב", level: 9, isVerb: false, example: "Pay attention." },
  { word: "attitude", translation: "גישה", level: 9, isVerb: false, example: "Positive attitude." },
  { word: "attract", translation: "למשוך", level: 9, isVerb: true, example: "Attract customers." },
  { word: "attribute", translation: "לייחס", level: 9, isVerb: true, example: "Attribute success." },
  { word: "audience", translation: "קהל", level: 9, isVerb: false, example: "Large audience." },
  { word: "author", translation: "סופר", level: 9, isVerb: false, example: "Famous author." },
  { word: "authority", translation: "סמכות", level: 9, isVerb: false, example: "Legal authority." },
  { word: "automatic", translation: "אוטומטי", level: 9, isVerb: false, example: "Automatic door." },
  { word: "available", translation: "זמין", level: 9, isVerb: false, example: "Available now." },

  // Level 10
  { word: "average", translation: "ממוצע", level: 10, isVerb: false, example: "Above average." },
  { word: "avoid", translation: "להימנע", level: 10, isVerb: true, example: "Avoid conflict." },
  { word: "await", translation: "לחכות", level: 10, isVerb: true, example: "Await results." },
  { word: "award", translation: "פרס", level: 10, isVerb: false, example: "Win an award." },
  { word: "aware", translation: "מודע", level: 10, isVerb: false, example: "Be aware." },
  { word: "away", translation: "הרחק", level: 10, isVerb: false, example: "Go away." },
  { word: "awful", translation: "נורא", level: 10, isVerb: false, example: "Awful weather." },
  { word: "baby", translation: "תינוק", level: 10, isVerb: false, example: "Cute baby." },
  { word: "back", translation: "חזרה", level: 10, isVerb: false, example: "Come back." },
  { word: "background", translation: "רקע", level: 10, isVerb: false, example: "Educational background." },

  // Level 11
  { word: "bag", translation: "תיק", level: 11, isVerb: false, example: "Pack your bag." },
  { word: "balance", translation: "איזון", level: 11, isVerb: false, example: "Keep your balance." },
  { word: "ball", translation: "כדור", level: 11, isVerb: false, example: "Throw the ball." },
  { word: "band", translation: "להקה", level: 11, isVerb: false, example: "A rock band." },
  { word: "bank", translation: "בנק", level: 11, isVerb: false, example: "Go to the bank." },
  { word: "bar", translation: "בר", level: 11, isVerb: false, example: "Meet at the bar." },
  { word: "base", translation: "בסיס", level: 11, isVerb: false, example: "The base of operations." },
  { word: "basic", translation: "בסיסי", level: 11, isVerb: false, example: "Basic skills." },
  { word: "basis", translation: "בסיס", level: 11, isVerb: false, example: "On a daily basis." },
  { word: "basket", translation: "סל", level: 11, isVerb: false, example: "A basket of fruit." },

  // Level 12
  { word: "bath", translation: "אמבטיה", level: 12, isVerb: false, example: "Take a bath." },
  { word: "battle", translation: "קרב", level: 12, isVerb: false, example: "Win the battle." },
  { word: "beach", translation: "חוף", level: 12, isVerb: false, example: "Go to the beach." },
  { word: "bear", translation: "דוב", level: 12, isVerb: false, example: "A brown bear." },
  { word: "beat", translation: "להכות", level: 12, isVerb: true, example: "Beat the drums." },
  { word: "beauty", translation: "יופי", level: 12, isVerb: false, example: "Natural beauty." },
  { word: "become", translation: "להיות", level: 12, isVerb: true, example: "Become successful." },
  { word: "bed", translation: "מיטה", level: 12, isVerb: false, example: "Go to bed." },
  { word: "before", translation: "לפני", level: 12, isVerb: false, example: "Before sunset." },
  { word: "begin", translation: "להתחיל", level: 12, isVerb: true, example: "Begin the lesson." },

  // Level 13
  { word: "behavior", translation: "התנהגות", level: 13, isVerb: false, example: "Good behavior." },
  { word: "behind", translation: "מאחורי", level: 13, isVerb: false, example: "Look behind you." },
  { word: "believe", translation: "להאמין", level: 13, isVerb: true, example: "I believe in you." },
  { word: "belong", translation: "להשתייך", level: 13, isVerb: true, example: "Where do you belong?" },
  { word: "below", translation: "מתחת", level: 13, isVerb: false, example: "Look below." },
  { word: "bend", translation: "לכופף", level: 13, isVerb: true, example: "Bend your knees." },
  { word: "benefit", translation: "תועלת", level: 13, isVerb: false, example: "The benefit of exercise." },
  { word: "best", translation: "הכי טוב", level: 13, isVerb: false, example: "Do your best." },
  { word: "better", translation: "יותר טוב", level: 13, isVerb: false, example: "Feel better." },
  { word: "between", translation: "בין", level: 13, isVerb: false, example: "Between two choices." },

  // Level 14
  { word: "beyond", translation: "מעבר ל", level: 14, isVerb: false, example: "Beyond expectations." },
  { word: "bicycle", translation: "אופניים", level: 14, isVerb: false, example: "Ride a bicycle." },
  { word: "big", translation: "גדול", level: 14, isVerb: false, example: "A big house." },
  { word: "bill", translation: "חשבון", level: 14, isVerb: false, example: "Pay the bill." },
  { word: "bird", translation: "ציפור", level: 14, isVerb: false, example: "A singing bird." },
  { word: "birth", translation: "לידה", level: 14, isVerb: false, example: "Date of birth." },
  { word: "bit", translation: "קצת", level: 14, isVerb: false, example: "A bit tired." },
  { word: "bite", translation: "לנשוך", level: 14, isVerb: true, example: "Don't bite." },
  { word: "black", translation: "שחור", level: 14, isVerb: false, example: "A black cat." },
  { word: "blame", translation: "להאשים", level: 14, isVerb: true, example: "Don't blame others." },

  // Level 15
  { word: "blank", translation: "ריק", level: 15, isVerb: false, example: "A blank page." },
  { word: "blind", translation: "עיוור", level: 15, isVerb: false, example: "Blind faith." },
  { word: "block", translation: "לחסום", level: 15, isVerb: true, example: "Block the entrance." },
  { word: "blood", translation: "דם", level: 15, isVerb: false, example: "Blood type." },
  { word: "blow", translation: "לנשוף", level: 15, isVerb: true, example: "Blow the candles." },
  { word: "blue", translation: "כחול", level: 15, isVerb: false, example: "Blue sky." },
  { word: "board", translation: "לוח", level: 15, isVerb: false, example: "Write on the board." },
  { word: "boat", translation: "סירה", level: 15, isVerb: false, example: "Sail a boat." },
  { word: "body", translation: "גוף", level: 15, isVerb: false, example: "Human body." },
  { word: "bone", translation: "עצם", level: 15, isVerb: false, example: "Break a bone." },

  // Level 16
  { word: "book", translation: "ספר", level: 16, isVerb: false, example: "Read a book." },
  { word: "border", translation: "גבול", level: 16, isVerb: false, example: "Cross the border." },
  { word: "born", translation: "נולד", level: 16, isVerb: false, example: "Born in May." },
  { word: "borrow", translation: "ללוות", level: 16, isVerb: true, example: "Borrow money." },
  { word: "both", translation: "שניהם", level: 16, isVerb: false, example: "Both options." },
  { word: "bottle", translation: "בקבוק", level: 16, isVerb: false, example: "A bottle of water." },
  { word: "bottom", translation: "תחתית", level: 16, isVerb: false, example: "At the bottom." },
  { word: "bound", translation: "קשור", level: 16, isVerb: false, example: "Bound together." },
  { word: "box", translation: "קופסה", level: 16, isVerb: false, example: "Open the box." },
  { word: "boy", translation: "ילד", level: 16, isVerb: false, example: "A young boy." },

  // Level 17
  { word: "brain", translation: "מוח", level: 17, isVerb: false, example: "Use your brain." },
  { word: "branch", translation: "ענף", level: 17, isVerb: false, example: "Tree branch." },
  { word: "brave", translation: "אמיץ", level: 17, isVerb: false, example: "Be brave." },
  { word: "bread", translation: "לחם", level: 17, isVerb: false, example: "Fresh bread." },
  { word: "break", translation: "לשבור", level: 17, isVerb: true, example: "Break the rules." },
  { word: "breakfast", translation: "ארוחת בוקר", level: 17, isVerb: false, example: "Eat breakfast." },
  { word: "breath", translation: "נשימה", level: 17, isVerb: false, example: "Take a breath." },
  { word: "breathe", translation: "לנשום", level: 17, isVerb: true, example: "Breathe deeply." },
  { word: "bridge", translation: "גשר", level: 17, isVerb: false, example: "Cross the bridge." },
  { word: "brief", translation: "קצר", level: 17, isVerb: false, example: "A brief meeting." },

  // Level 18
  { word: "bright", translation: "בהיר", level: 18, isVerb: false, example: "Bright future." },
  { word: "bring", translation: "להביא", level: 18, isVerb: true, example: "Bring water." },
  { word: "broad", translation: "רחב", level: 18, isVerb: false, example: "Broad shoulders." },
  { word: "brother", translation: "אח", level: 18, isVerb: false, example: "My brother." },
  { word: "brown", translation: "חום", level: 18, isVerb: false, example: "Brown hair." },
  { word: "brush", translation: "מברשת", level: 18, isVerb: false, example: "Hair brush." },
  { word: "build", translation: "לבנות", level: 18, isVerb: true, example: "Build a house." },
  { word: "building", translation: "בניין", level: 18, isVerb: false, example: "Tall building." },
  { word: "burn", translation: "לשרוף", level: 18, isVerb: true, example: "Burn calories." },
  { word: "burst", translation: "להתפוצץ", level: 18, isVerb: true, example: "Burst the bubble." },

  // Level 19
  { word: "business", translation: "עסק", level: 19, isVerb: false, example: "Start a business." },
  { word: "busy", translation: "עסוק", level: 19, isVerb: false, example: "Very busy." },
  { word: "but", translation: "אבל", level: 19, isVerb: false, example: "But why?" },
  { word: "butter", translation: "חמאה", level: 19, isVerb: false, example: "Spread butter." },
  { word: "button", translation: "כפתור", level: 19, isVerb: false, example: "Push the button." },
  { word: "buy", translation: "לקנות", level: 19, isVerb: true, example: "Buy groceries." },
  { word: "by", translation: "על ידי", level: 19, isVerb: false, example: "By myself." },
  { word: "cage", translation: "כלוב", level: 19, isVerb: false, example: "Bird cage." },
  { word: "cake", translation: "עוגה", level: 19, isVerb: false, example: "Birthday cake." },
  { word: "calculate", translation: "לחשב", level: 19, isVerb: true, example: "Calculate the cost." },

  // Level 20
  { word: "call", translation: "לקרוא", level: 20, isVerb: true, example: "Call me later." },
  { word: "calm", translation: "רגוע", level: 20, isVerb: false, example: "Stay calm." },
  { word: "camera", translation: "מצלמה", level: 20, isVerb: false, example: "Digital camera." },
  { word: "camp", translation: "מחנה", level: 20, isVerb: false, example: "Summer camp." },
  { word: "can", translation: "יכול", level: 20, isVerb: true, example: "I can help." },
  { word: "cancel", translation: "לבטל", level: 20, isVerb: true, example: "Cancel the meeting." },
  { word: "cancer", translation: "סרטן", level: 20, isVerb: false, example: "Fight cancer." },
  { word: "candidate", translation: "מועמד", level: 20, isVerb: false, example: "Job candidate." },
  { word: "cap", translation: "כובע", level: 20, isVerb: false, example: "Baseball cap." },
  { word: "capable", translation: "מסוגל", level: 20, isVerb: false, example: "Capable person." }
];