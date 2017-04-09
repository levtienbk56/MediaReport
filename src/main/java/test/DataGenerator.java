package test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class DataGenerator {

	public static void main(String[] args) throws IOException {
		String content = "";
		int count = 0;
		long extra = 0;
		long extra2 = 0;
		long extra3 = 0;
		// [new Date(2017, 06, 27), 98],
		for (int y = 2010; y < 2018; y++) {
			extra += Math.round(Math.random() * 20);
			extra2 = 0;
			for (int m = 0; m < 12; m++) {
				extra2 = Math.round(Math.random() * 10);
				for (int d = 1; d < 29; d++) {
					extra3 = Math.round(Math.random() * 100);
					long x = Math.round(extra - extra2 + 30 + extra3);
					String str = "[new Date(" + y + "," + m + "," + d + "), " + x + "],\n";
					content += str;
					count++;
				}
			}
		}

		File f = new File("C:/dev/report/data.txt");
		Files.write(f.toPath(), content.getBytes(), StandardOpenOption.CREATE);

		System.out.println(count);
	}

}
