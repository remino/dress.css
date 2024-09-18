#!/usr/bin/env bats

USER_AGENT='remino.net/dress.css//tests'

redirect_1() {
	run curl -f -s -I \
		-A "$USER_AGENT" \
		"https://remino.net/$1" \
		;

	[ "$status" -eq 0 ]
	echo "$output" | grep -q -i -F 'location: /dress.css/'
}

redirect_2() {
	run curl -f -s -I \
		-A "$USER_AGENT" \
		"https://remino.net/$1/dress.css" \
		;

	[ "$status" -eq 0 ]
	echo "$output" | grep -q -i -F 'location: /dress.css/dress.css'
}

for orig_path in dresscss semcss sem.css; do
	bats_test_function --description "Redirect from /$orig_path to /dress.css/" -- redirect_1 "$orig_path"
	bats_test_function --description "Redirect from /$orig_path/dress.css to /dress.css/dress.css" -- redirect_2 "$orig_path"
done
