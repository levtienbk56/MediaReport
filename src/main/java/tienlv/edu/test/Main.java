package tienlv.edu.test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
	public static void main (String[] args){
		Pattern regex = Pattern.compile("[\\p{IsHan}]");
		Matcher matcher = regex.matcher("写ハア");
		
		if(matcher.find()){
			System.out.print("match!");
		}
	}
}
