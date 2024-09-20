import random
import time

from producer import produce_data


def temperature():
    return {"temperature": round(random.uniform(15.0, 35.0), 2)}


def humidity():
    return {"humidity": round(random.uniform(30.0, 90.0), 2)}


def air_quality():
    return {"air_quality": round(random.uniform(0.0, 1.0), 2)}


def light():
    return {"light": round(random.uniform(0.0, 1.0), 2)}


def wind():
    return {"wind": round(random.uniform(0.0, 1.0), 2)}


def rain():
    return {"rain": round(random.uniform(0.0, 1.0), 2)}


def uv():
    return {"uv": round(random.uniform(0.0, 1.0), 2)}


def co2():
    return {"co2": round(random.uniform(0.0, 1.0), 2)}


def tvoc():
    return {"tvoc": round(random.uniform(0.0, 1.0), 2)}


def noise():
    return {"noise": round(random.uniform(0.0, 1.0), 2)}


def produce():
    while True:
        data = [
            temperature(),
            humidity(),
            air_quality(),
            light(),
            wind(),
            rain(),
            uv(),
            co2(),
            tvoc(),
            noise(),
        ]

        for d in data:
            produce_data("sensors", d)

        time.sleep(5)  # Send data every 5 seconds


if __name__ == "__main__":
    produce()
