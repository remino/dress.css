#!/usr/bin/env bats

@test "Responds with redirect from /sem.css to /semcss/" {
	run curl -f -s -I \
		-A 'remino.net/semcss//tests' \
		'https://remino.net/sem.css' \
		;

	[ "$status" -eq 0 ]
	echo "$output" | grep -q -i -F 'location: /sem.css/'
}

@test "Responds with redirect from /sem.css/sem.css to /semcss/sem.css" {
	run curl -f -s -I \
		-A 'remino.net/semcss//tests' \
		'https://remino.net/sem.css/sem.css' \
		;

	[ "$status" -eq 0 ]
	echo "$output" | grep -q -i -F 'location: /semcss/sem.css'
}
