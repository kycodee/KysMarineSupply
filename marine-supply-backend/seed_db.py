from sqlalchemy.orm import Session
from SqlServerConn import engine
from models import Engine, Base

def seed_data():
    Base.metadata.create_all(bind=engine)

    with Session(engine) as session:
        session.query(Engine).delete()
        session.commit()
        engines = [
                Engine(
                    name="S6A3-Y1MPTA-3",
                    power="483 HP",
                    series="A Series",
                    image_url="https://www.labordeproducts.com/hubfs/s6a3.png",
                    link="https://www.labordeproducts.com/engines/mitsubishi-marine-engines/s6a3-y1mpta-3?hsLang=en",
                    current_stock=10
                ),
                Engine(
                    name="S12A2-Y1MPTA-3",
                    power="850 HP",
                    series="A Series",
                    image_url="https://www.labordeproducts.com/hubfs/S12A2-1.png",
                    link="https://www.labordeproducts.com/engines/mitsubishi-marine-engines/s12a2-y1mpta-3?hsLang=en",
                    current_stock=10
                ),
                Engine(
                    name="S6R-Y1MPTAW-3",
                    power="590 HP",
                    series="R Series",
                    image_url="https://www.labordeproducts.com/hubfs/Imported%20images/S6R-Y1MPTA-3-768x624.png",
                    link="https://www.labordeproducts.com/engines/mitsubishi-marine-engines/s6r-y1mptaw-3?hsLang=en",
                    current_stock=10
                ),
                Engine(
                    name="173 HP BPU",
                    power="173 HP",
                    series="BPU",
                    image_url="https://www.labordeproducts.com/hubfs/Imported%20images/LPI-173-1-768x762.png",
                    link="https://www.labordeproducts.com/engines/auxiliary/173-hp-bpu?hsLang=en",
                    current_stock=10
                ),
                Engine(
                    name="429 HP Low Profile BPU",
                    power="429 HP",
                    series="BPU",
                    image_url="https://www.labordeproducts.com/hubfs/Imported%20images/S6B3-429BPU-1-768x605.png",
                    link="https://www.labordeproducts.com/engines/auxiliary/429-hp-low-profile-bpu?hsLang=en",
                    current_stock=10
                ),
                Engine(
                    name="429 HP BPU",
                    power="429 HP",
                    series="BPU",
                    image_url="https://www.labordeproducts.com/hubfs/Imported%20images/DSC0022-768x623.png",
                    link="https://www.labordeproducts.com/engines/auxiliary/429-hp-bpu?hsLang=en",
                    current_stock=10
                )
            ]
        session.add_all(engines)
        session.commit()
