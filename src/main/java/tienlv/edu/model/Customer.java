package tienlv.edu.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

public class Customer {

	@NotNull
	@Pattern(regexp = "[\\p{IsLetter}]+")
	private String username;

	@NotEmpty
	@Pattern(regexp = "[\\p{IsKatakana}]+")
	private String furiganaName;

	@NotEmpty(message = "メールアドレスを定義するのが必要です。") // エラーメッセージを設定する
	@Email(message = "適当なフォームのメールを入力してください") // エラーメッセージを設定する
	private String email;

	// Getter & Setter

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Customer [username=" + username + ", email=" + email + "]";
	}
}
