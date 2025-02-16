import time

def countdown_timer(seconds):
    while seconds:
        mins, secs = divmod(seconds, 60)
        time_format = '{:02d}:{:02d}'.format(mins, secs)
        print(time_format, end='\r')
        time.sleep(1)
        seconds -= 1

    print("Time's up!")

if __name__ == "__main__":
    user_input = int(input("Enter time in seconds: "))
    countdown_timer(user_input)
