namespace Template {
  export async function Scene_02(): ƒS.SceneReturn {
    console.log("Scene_02");
    
    let text = {
      narrator: {
        T001: "Ein winterlicher Abend, der Vollmond leuchtet grell durch den dichten Schneesturm.",
        T002: "Du befindest dich zum Glück im warmen Wohnzimmer und bist mit einer flauschigen Decke gemütlich eingerollt.",
        T003: "Alles was jetzt noch fehlt, ist eine heiße Tasse Schokolade mit einem großen Klecks Schlagsahne.",
        T004: "Deine Mutter kommt passender Weise gerade durch die Wohnzimmertür und wäre die perfekte Dienstbotin, um dir deinen Wunsch zu erfüllen.",
        T005: "Bevor deine Mutter mit müden Augen zu Wort kommt, unterbrichst du sie..."
      },
      protagonist: {
        T001: "Mama! Du kommst gerade richtig, um mir einen heißen Kakao zu bringen."
      }, 
      antagonist: {
        T001: "Mir tut leider alles weh vom Schneeschüppen. Bitte mach ihn dir doch selber, okay?"
      }
    }
    await ƒS.Speech.tell(characters.narrator, text.narrator.T001);
    await ƒS.Location.show(location.bedroom);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happy, ƒS.positionPercent(30, 90));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T002);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T003);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T004);
    await ƒS.Character.animate(characters.antagonist, characters.antagonist.pose.sleepy, canvasRightEntry())
    await ƒS.Speech.tell(characters.narrator, text.narrator.T005);
    await ƒS.Speech.tell(characters.protagonist, "!!!");
    await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.excited, ƒS.positionPercent(30, 90));
    await ƒS.Character.hide(characters.protagonist);
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T001);
    await ƒS.Speech.tell(characters.antagonist, "...");
    await ƒS.Speech.tell(characters.antagonist, text.antagonist.T001);
    //await ƒS.Character.hide(characters.protagonist);
    //await ƒS.update(0);

    let firstOption = {
      option1: "Ist schon okay, ruh dich erstmal aus!",
      option2: "Ich will jetzt nicht aufstehen, siehst du doch. Du hast doch jetzt nichts Besseres zu tun."
    }

    let firstElement = await ƒS.Menu.getInput(firstOption, "individualCSSClass");

    switch (firstElement) {
      case firstOption.option1:
      await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.pleased, ƒS.positionPercent(30, 90));
      await ƒS.Character.hide(characters.protagonist);
      await ƒS.update(0);
        break;
      case firstOption.option2:
        await ƒS.Speech.tell(characters.antagonist, "Ich glaub wohl ich hör nicht richtig!?");
        await ƒS.Speech.tell(characters.antagonist, "Du bist so ein faules Kind geworden, siehst du nicht, dass ich Schmerzen habe?");
        await ƒS.Speech.tell(characters.protagonist, "Warum motzt du denn gleich so rum ey.");
        await ƒS.Speech.tell(characters.protagonist, "Du hast andauernd irgendwas, warum jetzt schon wieder?");
        await ƒS.Speech.tell(characters.antagonist, "Entschuldigung, dass ich mir das nicht aussuchen konnte, du bewegst im Gegensatz keinen einzigen Finger hier im Haushalt.");
        await ƒS.Speech.tell(characters.protagonist, "Jaja, dann muss ich halt jetzt extra aufstehen, meine Güte");
        break;
    }

    await ƒS.Speech.tell(characters.antagonist, "Danke dir, das schaffst du auch alleine. Ich kann wirklich kaum noch was machen und will einfach nur ins Bett fallen.");
    await ƒS.Speech.tell(characters.protagonist, "Dann halte ich dich nicht länger auf.");
    await ƒS.Speech.tell(characters.antagonist, "Warte, könntest du mir vielleicht noch kurz helfen?");
    await ƒS.Speech.tell(characters.antagonist, "Du müsstest noch draußen etwas Feuerholz für den Ofen rein bringen, sonst wird es hier heute Nacht sehr kalt im Haus.");

    let secondOption = {
      option1: "Ja natürlich, ich mach das schon. Ich möchte ja nicht, dass wir uns einen Ast abfrieren.",
      option2: "Aha, ich soll jetzt noch was für dich machen, aber du willst nichts für mich machen. Ich glaube das kannst du dir abschminken."
    }

    let secondElement = await ƒS.Menu.getInput(secondOption, "individualCSSClass");

    switch (secondElement) {
      case secondOption.option1:
        await ƒS.Speech.tell(characters.antagonist, "Danke mein Schatz, du bist ein Engel! Was würde ich nur ohne dich machen." );
        await ƒS.Speech.tell(characters.antagonist, "Seit dein Vater weg ist, musst du hier der Mann im Haus sein. ich kann leider nicht mehr alles machen." );
        await ƒS.Speech.tell(characters.antagonist, "Ich muss zwei Jobs belegen, damit wir über die Runden kommen und jünger werde ich leider auch nicht." );
        await ƒS.Speech.tell(characters.antagonist, "Deshalb bedeutet mir deine Hilfe sehr viel, danke dir!" );
        await ƒS.Speech.tell(characters.protagonist, "Das ist doch selbstverständlich, du musst dir da keine Gedanken machen. Ich werde mich um uns kümmern so gut es geht." );
        break;
      case secondOption.option2:
        await ƒS.Speech.tell(characters.antagonist, "Ich bin wahnsinnig enttäuscht von dir, deine Art bricht mir das Herz." );
        await ƒS.Speech.tell(characters.antagonist, "Dein Vater hätte das nicht so gewollt von dir." );
        await ƒS.Speech.tell(characters.protagonist, "Wage ja nicht ihn zu erwähnen!" );
        await ƒS.Speech.tell(characters.protagonist, "Tu nicht so als hätte er sich so viel um dich... um uns... gekümmert!" );
        await ƒS.Speech.tell(characters.antagonist, "Was ist nur passiert? Du warst früher so fröhlich und hilfsbereit." );
        await ƒS.Speech.tell(characters.antagonist, "Und nun machst du einen Aufstand wegen einer Tasse Kakao, weil deine kranke Mutter vor Schmerzen kaum noch stehen kann." );
        await ƒS.Menu.getInput({option1: "Es... es tut mir leid, ich weiß nicht was über mich gekommen ist."}, "individualCSSClass");
        await ƒS.Speech.tell(characters.protagonist, "Du hast Recht, ich habe mich selbst verloren seit Papa nicht mehr ist." );
        await ƒS.Speech.tell(characters.protagonist, "Als wäre ich von einem bösen Geist besessen, ich kann es nicht erklären.")
          await ƒS.Speech.tell(characters.protagonist, "Bitte lass es mich wieder gut machen.")
        break;
    }

    await ƒS.Speech.tell(characters.antagonist, "Ich hab dich so sehr lieb, vergiss das bitte nie." );
    await ƒS.Speech.tell(characters.protagonist, "Niemals! Ich werde sofort das Holz holen und dir dann noch einen leckeren Kakao ans Bett bringen." );
    await ƒS.Speech.tell(characters.antagonist, "Das ist mein Kind!" );




  }
}